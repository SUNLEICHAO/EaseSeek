import { Button } from "antd";
import { main } from "@/utils/openAIUtil.ts";
import type { Message } from "@/types";
import React, { useRef, useEffect } from "react";
interface ChatRecordProps {
  messageList: Message[];
}

export const ChatRecord: React.FC<ChatRecordProps> = ({ messageList }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messageList]);

  const handleSend = () => {
    main();
  };

  return (
    <div ref={scrollRef} className="overflow-y-auto flex flex-col gap-4 mb-4">
      <Button type="primary" onClick={handleSend}>
        发送请求
      </Button>
      {messageList.map((message) => (
        <div
          key={message.id}
          className={`max-w-[70%] p-3 rounded-2xl ${
            message.sender === "user" ? "self-end bg-blue-500 text-white" : "self-start bg-gray-100 text-gray-900"
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatRecord;

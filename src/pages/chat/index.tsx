import { useParams } from "react-router-dom";
import SendMessage from "@/components/content/chat/SendMessage";
import React, { useState } from "react";
import TheGreat from "@/components/content/chat/TheGreat";
import ChatRecord from "@/components/content/chat/ChatRecord";
import type { Message } from "@/types";

const UserPage: React.FC = () => {
  // 组件内部：状态、副作用、事件处理函数
  const { id } = useParams<{ id: string }>();
  const [messageList, setMessageList] = useState<Message[]>([]);

  const handleNewMessage = (message: { content: string; isDeepThinking: boolean; isInternetSearch: boolean }) => {
    setMessageList((prevMessageList) => [
      ...prevMessageList,
      {
        id: Math.random().toString(),
        content: message.content,
        sender: "user",
        time: "",
      },
      {
        id: Math.random().toString(),
        content: "你好，" + message.content,
        sender: "agent",
        time: "",
      },
    ]);
  };

  return (
    <>
      <div className="m-[auto] max-w-[800px] w-[100%] h-[100%] flex flex-col justify-center pl-8 pr-8">
        {id ? (
          <div className="user-page grow-1 overflow-hidden flex flex-col">
            <div className="flex justify-center items-center h-12 shadow-[0_4px_6px_-6px_rgba(0,0,0,0.1)]">
              <span>聊天: {id}</span>
            </div>
            <ChatRecord messageList={messageList} />
          </div>
        ) : (
          <TheGreat />
        )}
        {/* <>当前消息：{messages.join("@")}</> */}
        <SendMessage onSendMessage={handleNewMessage} />
      </div>
    </>
  );
};

export default UserPage;

import { Divider } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CHAT_LIST, TIME_STAGE } from "@/const/index.ts";
import type { ChatItem } from "@/types/index.ts";
import { setLocalData, getLocalData } from "@/utils/localStorageUtil.ts";

type ChatHistoryGroups = {
  time: string;
  list: ChatItem[];
}[];

const ChatHistoryList: React.FC = () => {
  const navigate = useNavigate();

  // setChatHistoryGroups
  const [chatHistoryGroups] = useState<ChatHistoryGroups>((): ChatHistoryGroups => {
    // 尝试从 localStorage 获取数据
    const savedHistory = getLocalData(CHAT_LIST);
    if (savedHistory) {
      // 需要将日期字符串转回 Date 对象
      // 处理一下数据格式
      // TIME_STAGE
      Object.keys(TIME_STAGE).map((stage) => {
        return {
          time: stage,
        };
      });
      savedHistory.forEach((group) => {
        group.list.forEach((item) => {
          item.time = new Date(item.time).toLocaleString();
        });
      });
      return savedHistory as ChatHistoryGroups;
    }

    // 初始数据
    const initialData = [
      {
        time: "今天",
        list: [
          { id: "1", title: "聊天记录1", time: "20250305 16:31:54" },
          { id: "2", title: "聊天记录2", time: "20250305 16:35:54" },
        ],
      },
      {
        time: "更早",
        list: [{ id: "3", title: "聊天记录3", time: "20250301 16:35:54" }],
      },
    ];

    setLocalData(CHAT_LIST, initialData);
    return initialData;
  });

  // 当数据更新时保存到 localStorage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistoryGroups));
  }, [chatHistoryGroups]);

  return (
    <div className="pr-4">
      {chatHistoryGroups.map((group) => (
        <div key={group.time} className="chat-history-group">
          <Divider orientation="left">{group.time}</Divider>
          {group.list.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/chat/${item.id}`)}
              className="text-sm/10 truncate overflow-hidden cursor-pointer hover:bg-gray-100"
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatHistoryList;

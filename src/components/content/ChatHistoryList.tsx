import React, { useState } from "react";
import { Divider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

interface ChatItem {
  id: string;
  title: string;
  timestamp: Date;
}

interface ChatHistoryGroup {
  time: string;
  list: ChatItem[];
}

const ChatHistoryList: React.FC = () => {
  const navigate = useNavigate();

  const [chatHistoryGroups, _setChatHistoryGroups] = useState<ChatHistoryGroup[]>([
    {
      time: "今天",
      list: [
        { id: "1", title: "聊天记录1", timestamp: new Date() },
        { id: "2", title: "聊天记录2", timestamp: new Date() },
      ],
    },
    {
      time: "更早",
      list: [
        { id: "3", title: "聊天记录3", timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: "4",
          title: "聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4聊天记录4",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
      ],
    },
  ]);

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

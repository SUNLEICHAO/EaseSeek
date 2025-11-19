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
    const savedHistory: ChatItem[] | null = getLocalData(CHAT_LIST);
    if (savedHistory) {
      // TIME_STAGE
      const res: ChatHistoryGroups = Object.values(TIME_STAGE).map((stage) => {
        return {
          time: stage,
          list: [],
        };
      });
      // 需要根据时间，划分分组
      // savedHistory.forEach((oneHistory) => {
      //   // if(TIME_STAGE_STEP[0])
      //   // oneHistory
      // });
      res[0].list = savedHistory;
      return res as ChatHistoryGroups;
    }

    // 初始数据
    const initialData: ChatHistoryGroups = [
      {
        time: "今天",
        list: [
          {
            id: "1",
            title: "聊天记录2",
            time: "20250305 16:35:54",
            record: [
              { id: "wer5asdf", content: "你好", role: "user", time: "20250305 16:35:54" },
              { id: "sadfsd5f", content: "你好,请问有什么可以帮助你的", role: "agent", time: "20250305 16:35:54" },
              {
                id: "asdf12er",
                content: "我想了解一下这个平台提供什么服务",
                role: "user",
                time: "20250305 16:36:12",
              },
              {
                id: "qwe43rty",
                content: "我们提供智能咨询和各种资源的检索服务，您可以询问任何问题",
                role: "agent",
                time: "20250305 16:36:28",
              },
              { id: "zxc789vb", content: "能帮我查找相关的文档资料吗？", role: "user", time: "20250305 16:36:45" },
              {
                id: "poi098nm",
                content: "当然可以，请告诉我您需要哪方面的资料，我会为您检索最相关的文档",
                role: "agent",
                time: "20250305 16:37:02",
              },
              {
                id: "lkj567hg",
                content: "谢谢，我需要有关人工智能的最新研究",
                role: "user",
                time: "20250305 16:37:20",
              },
              {
                id: "mnb432op",
                content: "我已为您找到多篇关于人工智能的最新研究报告，请问您想从哪个领域开始了解？",
                role: "agent",
                time: "20250305 16:37:40",
              },
            ],
          },
        ],
      },
      {
        time: "更早",
        list: [
          {
            id: "2",
            title: "一个月前的记录",
            time: "20250205 10:15:30",
            record: [
              { id: "month1", content: "我需要了解一下数据分析工具", role: "user", time: "20250205 10:15:30" },
              { id: "month2", content: "有哪些数据分析工具可以推荐？", role: "user", time: "20250205 10:16:05" },
              {
                id: "month3",
                content:
                  "我可以推荐几种常用的数据分析工具，如Python的pandas库、R语言、Tableau、Power BI等，您对哪种更感兴趣？",
                role: "agent",
                time: "20250205 10:16:30",
              },
              {
                id: "month4",
                content: "我更倾向于使用Python，能详细说说pandas吗？",
                role: "user",
                time: "20250205 10:17:15",
              },
              {
                id: "month5",
                content:
                  "Pandas是Python中用于数据分析和处理的强大库，它提供了数据结构如DataFrame，能高效处理结构化数据，支持读写各种格式，并有丰富的数据清洗、转换和分析功能。",
                role: "agent",
                time: "20250205 10:18:00",
              },
            ],
          },
        ],
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
      {chatHistoryGroups.map((group, groupIndex) => (
        <div key={`group-${group.time}-${groupIndex}-${Math.random()}`}>
          <Divider orientation="left">{group.time}</Divider>
          {group.list.map((item) => (
            <div
              key={`chat-${item.id}-${Math.random()}`}
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

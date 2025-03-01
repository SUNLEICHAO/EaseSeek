import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mock from "mockjs";

// 组件外部：常量、工具函数
const mockData = Mock.mock({
  "list|1-10": [
    {
      id: "@id",
      // 模拟一句话，随机的一串中文0-20个字
      "sentence|1": "@cparagraph(1, 20)",
    },
  ],
});

const UserPage: React.FC = () => {
  // 组件内部：状态、副作用、事件处理函数
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // 副作用代码
    console.log(JSON.stringify(mockData, null, 4));
    // 可以在这里调用 API 或进行其他操作
  }, []);

  const handleSendMessage = () => {
    // 事件处理函数
    setMessages([...messages, { id: Date.now() }]);
  };

  return (
    <>
      {/* JSX 中的 JavaScript 表达式 */}
      {id ? (
        <div className="user-page">
          <h1>聊天 {id}</h1>
          <button onClick={handleSendMessage}>发送消息</button>
        </div>
      ) : (
        <div className="user-page">
          <h1>新聊天</h1>
          <button onClick={handleSendMessage}>发送消息</button>
        </div>
      )}
      <div className="messages">
        {mockData.list.map((item: any) => (
          <div key={item.id} className="message">
            {item.sentence}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;

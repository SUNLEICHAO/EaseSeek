import React from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {id ? (
        <div className="user-page">
          <h1>聊天 {id}</h1>
        </div>
      ) : (
        <div className="user-page">
          <h1>新聊天</h1>
        </div>
      )}
    </>
  );
};

export default UserPage;

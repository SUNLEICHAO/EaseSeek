import React, { useMemo } from "react";
import { Button, notification } from "antd";

const Context = React.createContext({ name: "Default" });

export const About: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `消息提醒`,
      description: "登陆成功了",
      placement: "topRight",
      duration: 10,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <>
      <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
      <Button type="primary" onClick={openNotification}>
        弹窗~
      </Button>
    </>
  );
};

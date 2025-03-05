import React, { useMemo } from "react";
import type { CheckboxProps } from "antd";
import { Input, Button, Checkbox, notification, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import loginBg from "@/assets/images/login_bg.png";
import logoLong from "@/assets/images/logo_long.png";
const Context = React.createContext({ name: "Default" });

export function Login() {
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const onChange: CheckboxProps["onChange"] = () => {};
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  const [form] = Form.useForm();

  const handleLogin = () => {
    api.info({
      message: `消息提醒`,
      description: "登陆成功了",
      placement: "topRight",
    });
    navigate("/about");
  };

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
        <div className="w-4/5 h-full relative flex justify-end items-center">
          <div className="absolute top-[15%] left-[8%]">
            <img src={logoLong} alt="" width="451" height="62" />
          </div>
          <div className="mr-20">
            <div className="shadow-[0_4px_20px_0_rgba(208,219,255,0.3)] rounded-sm p-[50px] min-w-[300px] w-[300px] bg-white/65">
              <div className="mb-10 text-2xl font-medium text-[rgba(0,0,0,0.85)] text-center">
                <span>欢迎登录系统</span>
              </div>
              <Form form={form}>
                <Form.Item name="username" rules={[{ required: true }]}>
                  <Input placeholder="请输入用户名/工号/姓名" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                  <Input placeholder="请输入登录密码" prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item name="remember">
                  <Checkbox onChange={onChange}>记住密码</Checkbox>
                </Form.Item>
                <Form.Item name="remember">
                  <Button type="primary" block onClick={handleLogin}>
                    立即登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
    </>
  );
}

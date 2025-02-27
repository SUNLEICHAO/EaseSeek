import React, { useMemo } from "react";
import logoLong from "../../assets/logo_long.png";
import type { CheckboxProps } from "antd";
import { Input, Button, Checkbox, notification, Form, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Context = React.createContext({ name: "Default" });

export function Login() {
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
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
      <div className="login-page flex-center">
        <div className="login-container">
          <div className="login-logo">
            <img src={logoLong} alt="" width="451" height="62" />
          </div>
          <div className="login-box">
            <div className="login-box-inner">
              <div className="login-great">
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

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    // 假设你有一个方法来检查用户是否登录
    const isLoggedIn = () => {
      // 这里你可以从 localStorage、Redux store 或其他地方获取登录状态
      return localStorage.getItem("token") !== null;
    };

    if (!isLoggedIn()) {
      // 如果未登录，重定向到登录页面
      navigate("/login", { state: { from: location } });
      return null;
    }

    // 如果已登录，渲染被包裹的组件
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

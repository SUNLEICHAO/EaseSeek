import React from "react";
import { HomeOutlined, FundOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    label: "首页",
    icon: <HomeOutlined />,
  },
  {
    key: "man",
    label: "流程管理",
    icon: <FundOutlined />,
    children: [
      { key: "2-1", label: "全部流程", icon: <HomeOutlined /> },
      { key: "2-2", label: "我的草稿", icon: <HomeOutlined /> },
    ],
  },
  {
    key: "/about",
    label: "关于",
    icon: <HomeOutlined />,
  },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "#f9fbff",
            itemColor: "red",
            itemHoverBg: "#e6f7ff",
            itemHoverColor: "#1890ff",
            itemActiveBg: "#e6f7ff",
            itemSelectedBg: "#e6f7ff",
            itemSelectedColor: "#1890ff",
          },
        },
      }}
    >
      <Menu onClick={onClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" items={items} />
    </ConfigProvider>
  );
};

export default App;

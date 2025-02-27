import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  FundOutlined,
  FundTwoTone,
} from "@ant-design/icons";
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
    console.log("click ", e);
    navigate(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "#6387d4",
            itemColor: "#fff",
            itemHoverBg: "rgba(255,255,255,0.15)",
            itemHoverColor: "#fff",
            itemActiveBg: "rgba(255,255,255,0.15)",
            itemSelectedBg: "rgba(255,255,255,0.15)",
            itemSelectedColor: "#fff",
          },
        },
      }}
    >
      <Menu onClick={onClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" items={items} />
    </ConfigProvider>
  );
};

export default App;

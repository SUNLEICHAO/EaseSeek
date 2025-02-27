import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import TheHeader from "../../components/content/theHeader/TheHeader";
import TheMenu from "./TheMenu";

export const Layout: React.FC = () => {
  return (
    <>
      <div className="page">
        <div className="page-sidebar">
          <div className="sidebar-top">
            <TheHeader />
            <div className="sidebar-menu">
              <TheMenu />
            </div>
          </div>
          <div className="sidebar-middle"></div>
          <div className="sidebar-bottom"></div>
        </div>
        <div className="page-mainer">
          <div className="mainer-topbar"></div>
          <div className="mainer-tabbar"></div>
          <div className="mainer-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

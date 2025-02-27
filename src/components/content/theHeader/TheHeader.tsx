import React from "react";
import logoXhzh from "@/assets/logo_xhzh.png";

const type: string = "not-oa";

const Header: React.FC = () => {
  return (
    <>
      {type === "oa" ? (
        <div>
          <div className="sidebar-logo">
            <div className="sidebar-logo-img">
              <img src={logoXhzh} alt="" width="58" height="35" />
            </div>
            <div className="sidebar-logo-title">OA办公自动化平台</div>
          </div>
          <div className="sidebar-version">V2.4.25.0</div>
        </div>
      ) : (
        <header className="w-full p-4 border-b">
            <span className="text-2xl font-bold text-[rgb(0,0,0)] dark:text-white">DeepSeek</span>
        </header>
      )}
    </>
  );
};

export default Header;

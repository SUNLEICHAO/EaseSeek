import React from "react";

import logoXhzh from "@/assets/images/logo_xhzh.png";
import SvgIcon from "@/components/common/SvgIcon.tsx";

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
        <header className="w-full p-4">
          <SvgIcon className="h-8 w-[100%]" name="logo-text"></SvgIcon>
        </header>
      )}
    </>
  );
};

export default Header;

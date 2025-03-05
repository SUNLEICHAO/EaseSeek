import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import ChatList from "@/components/content/ChatList";
import SvgIcon from "@/components/common/SvgIcon.tsx";

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[220px] bg-[#f9fbff] flex flex-col">
          <LayoutHeader />
          <div className="flex p-2 justify-center" onClick={() => navigate("/chat")}>
            <div className=" w-36 flex flex-row items-center py-2 rounded-lg p-2 bg-[#dceafd] text-[#506df9] cursor-pointer hover:bg-[#c7dcf6]">
              <SvgIcon className="h-6 w-6 mr-2" name="new-note"></SvgIcon>
              <span>开启新对话</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pl-4">
            <ChatList />
          </div>
          <div className="h-16 flex flex-row justify-between items-center p-4 text-[#5d5d5d]">
            <div
              onClick={() => navigate("/user")}
              className="h-[100%] text-b flex grow cursor-pointer hover:bg-[#c7dcf6] flex items-center mr-2 rounded-lg"
            >
              <SvgIcon className="w-6 h-6 mr-2" name="user"></SvgIcon>
              <span>[用户名]</span>
            </div>
            <div
              onClick={() => navigate("/setting")}
              className="h-[100%] w-8 cursor-pointer flex justify-center items-center hover:bg-[#e8e8e8] rounded-lg"
            >
              <SvgIcon className="h-4 w-4" name="setting"></SvgIcon>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
          <div className="text-center text-[#a3a3a3] text-xs/[14px] mt-[6px] mb-[6px]">内容由 AI 生成，请仔细甄别</div>
        </div>
      </div>
    </>
  );
};

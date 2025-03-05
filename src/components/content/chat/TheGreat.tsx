import React from "react";

import SvgIcon from "@/components/common/SvgIcon.tsx";

const SendMessage: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-3 text-2xl justify-center">
        <SvgIcon name="logo" className="w-15 h-15"></SvgIcon>
        我是 DeepSeek，很高兴见到你！
      </div>
      <div className="text-sm mt-2 mb-5 text-center">
        我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~
      </div>
    </>
  );
};

export default SendMessage;

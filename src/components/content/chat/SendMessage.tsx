import { ConfigProvider, Input, Button } from "antd";
import React, { useState } from "react";

import SvgIcon from "@/components/common/SvgIcon.tsx";

interface SendMessageProps {
  onSendMessage: (message: { content: string; isDeepThinking: boolean; isInternetSearch: boolean }) => void;
}

const { TextArea } = Input;

const SendMessage: React.FC<SendMessageProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonStates, setButtonStates] = useState<{
    isDeepThinking: boolean;
    isInternetSearch: boolean;
  }>({
    isDeepThinking: false,
    isInternetSearch: false,
  });

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }

    onSendMessage({
      content: inputValue,
      isDeepThinking: buttonStates.isDeepThinking,
      isInternetSearch: buttonStates.isInternetSearch,
    });

    setInputValue("");
  };

  return (
    <>
      <div className="rounded-3xl bg-[#f3f4f6] p-3">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                inputFontSize: 16,
              },
            },
          }}
        >
          <TextArea
            value={inputValue}
            className="bg-[red] no-padding"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入信息"
            variant="borderless"
            autoSize={{ minRows: 2 }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (e.ctrlKey) {
                  // Ctrl + Enter for new line
                  setInputValue((prev) => prev + "\n");
                } else {
                  // Enter for sending
                  e.preventDefault();
                  handleSubmit();
                }
              }
            }}
          />
        </ConfigProvider>
        <div className="flex justify-between text-[#4c4c4c] mt-2">
          <div className="flex items-center">
            <Button
              className="mr-2 flex items-center"
              shape="round"
              type={buttonStates.isDeepThinking ? "primary" : "default"}
              onClick={() =>
                setButtonStates({
                  ...buttonStates,
                  isDeepThinking: !buttonStates.isDeepThinking,
                })
              }
            >
              <div className="flex">
                <SvgIcon className="w-5 h-5" name="mode-deep"></SvgIcon>
                <span className="ml-1">深度思考</span>
              </div>
            </Button>
            <Button
              className="flex items-center"
              shape="round"
              type={buttonStates.isInternetSearch ? "primary" : "default"}
              onClick={() =>
                setButtonStates({
                  ...buttonStates,
                  isInternetSearch: !buttonStates.isInternetSearch,
                })
              }
            >
              <div className="flex">
                <SvgIcon className="w-5 h-5" name="mode-internet"></SvgIcon>
                <span className="ml-1">联网搜索</span>
              </div>
            </Button>
          </div>
          <div className="flex justify-end items-center">
            <SvgIcon className="h-6 w-6 mr-3" name="file"></SvgIcon>
            <div
              className={`h-8 w-8 ${
                inputValue.trim() ? "bg-[#506df9]" : "bg-[#d6dee7]"
              } text-[#fafafa] rounded-full flex justify-center items-center cursor-pointer`}
              onClick={handleSubmit}
            >
              <SvgIcon className="h-5 w-5" name="submit"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessage;

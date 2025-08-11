import { useState, useEffect, FunctionComponent } from "react";

interface TimeShowProps {}

const TimeShow: FunctionComponent<TimeShowProps> = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    // 创建一个定时器，每秒更新一次时间
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // 组件卸载时清除定时器，避免内存泄漏
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div>{now.getSeconds()}</div>
      <button>更新时间</button>
    </div>
  );
};

export default TimeShow;

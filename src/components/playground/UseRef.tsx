import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      <label htmlFor="input">输入框</label>
      <input id="input" ref={inputRef}></input>
    </div>
  );
}

export default App;

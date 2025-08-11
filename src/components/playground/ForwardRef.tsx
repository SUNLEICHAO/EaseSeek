import React, { useRef, useEffect } from "react";

const Child = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return <Child ref={ref} />;
}

export default App;

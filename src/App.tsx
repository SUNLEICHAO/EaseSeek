import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";

import NotFound from "@/pages/404.tsx";
import Chat from "@/pages/chat/index.tsx";
import Setting from "@/pages/setting/index.tsx";
import User from "@/pages/user/index.tsx";

import { Layout } from "./components/common/Layout.tsx";
import { About } from "./pages/about/index.tsx";
import { Home } from "./pages/home/index.tsx";
import { Login } from "./pages/login/index.tsx";
import "./App.css";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#6086d7",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;

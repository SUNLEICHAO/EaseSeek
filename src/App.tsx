import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/about/about";
import { Layout } from "./pages/common/layout.tsx";
import { Home } from "./pages/home/home";
import { Login } from "./pages/common/login";
import "./App.css";
import withAuth from "./pages/common/withAuth.tsx";
import { Button, ConfigProvider, Space } from "antd";
const ProtectedAbout = withAuth(About);

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
            <Route path="/about-demo" element={<ProtectedAbout />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;

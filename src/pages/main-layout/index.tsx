// import React, { useState } from "react";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { Button, Layout, Menu, theme } from "antd";
// import { NavLink, Outlet, To, useLocation, useNavigate } from "react-router-dom";
// import { routes } from "../../router/routes";
// import Logo from "../../assets/logo.svg";
// const { Header, Sider, Content } = Layout;

// const App: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   return (
//     <Layout>
//       <Sider
//         collapsedWidth={65}
//         style={{ height: "100vh" }}
//         width={250}
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//       >
//         {collapsed ? (
//           <div
//             onClick={() => navigate("/main")}
//             className="demo-logo-vertical cursor-pointer h-[60px] my-2 flex items-center mx-3"
//           >
//             <img
//               src={Logo}
//               alt="logo"
//               className="w-[40px]"
//             />
//           </div>
//         ) : (
//           <div
//             onClick={() => navigate("/main")}
//             className="demo-logo-vertical cursor-pointer mx-3 my-2 h-[60px] flex items-center gap-3"
//           >
//             <img
//               src={Logo}
//               alt="logo"
//               className="w-[40px]"
//             />
//             <h1 color="#fff" className="text-[20px]">TechnoAtr</h1>
//           </div>
//         )}
//         <Menu theme="dark" selectedKeys={["none"]}>
//           {routes.map((item: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; path: To; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
//             <Menu.Item
//               icon={item.icon}
//               key={index}
//               className={item.path === pathname ? "ant-menu-items" : ""}
//             >
//               <NavLink to={item.path} key={index}>
//                 <span className="text-[17px]">{item.content}</span>
//               </NavLink>
//             </Menu.Item>
//           ))}
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }}>
//           <div className="flex justify-between items-center">
//             <Button
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 fontSize: "16px",
//                 width: 64,
//                 height: 64,
//               }}
//             />
//           </div>
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
    
//   );
// };

// export default App;


import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme, Menu, Modal } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import MainLogo from "../../assets/main-logo.svg";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "Do you want to logout?",
      icon: <LogoutOutlined />,
      content: "Your session will be closed.",
      onOk() {
        navigate("/");
      },
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            padding: collapsed ? "16px 8px" : "16px",
            marginBottom: "16px",
          }}
        >
          <img
            src={MainLogo}
            alt="Main Logo"
            style={{ width: collapsed ? 32 : 48 }}
          />
          {!collapsed && (
            <span style={{ fontSize: "20px", color: "#fff", margin: "9px" }}>
              TechnoArk
            </span>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={routes.map((item, index) => ({
            key: index,
            icon: item.icon,
            label: <NavLink to={item.path}>{item.title}</NavLink>,
          }))}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 63,
              height: 64,
            }}
          />
          <Button
            type="text"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{ marginRight: "16px" }}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
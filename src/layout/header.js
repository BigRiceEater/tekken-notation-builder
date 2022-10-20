import { useState } from "react";
import { AppDrawer } from "./drawer";
import { Layout, Space, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

export const AppHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header style={{ backgroundColor: "white", padding: "0px 24px" }}>
        <Space>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpenMenu(true)}></Button>
        </Space>
      </Header>
      <AppDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

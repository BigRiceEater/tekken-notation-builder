import { useState } from "react";
import { AppMenu } from "./menu";
import { Layout, Space, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

export const AppHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header style={{ backgroundColor: "white" }}>
        <Space>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpenMenu(true)}></Button>
        </Space>
      </Header>
      <AppMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

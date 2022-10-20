import { useState } from "react";
import { useRecoilState } from 'recoil';
import { Layout, Space, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { AppDrawer } from "./drawer";
import { appMenuStore } from "../store/frontend";

const { Header } = Layout;

export const AppHeader = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
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
      <AppDrawer />
    </>
  );
};

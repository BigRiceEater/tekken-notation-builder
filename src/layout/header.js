import { useState } from "react";
import { useRecoilState } from 'recoil';
import { Layout, Space, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { grey } from "@ant-design/colors"
import { appMenuStore } from "../store/frontend";

const { Header } = Layout;

export const AppHeader = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
  return (
    <>
      <Header style={{ backgroundColor: "#F0F2F5", padding: "0px 24px" }}>
        <Space>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpenMenu(true)}></Button>
        </Space>
      </Header>
    </>
  );
};

import { useRecoilState } from "recoil";
import { Link, useLocation } from "react-router-dom";
import { Menu, Space } from "antd";

import { appMenuStore } from "../store/frontend";
import { useEffect } from "react";
import {
  AppleOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const AppLink = ({ icon, label }) => (
  <Space>
    {icon}
    {label}
  </Space>
);

export const AppMenu = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
  const location = useLocation();

  // key must match the pathname of location from react-router-dom
  const items = [
    {
      label: (
        <Link to="">
          <AppLink icon={<HomeOutlined />} label="Home" />
        </Link>
      ),
      key: "/",
    },
    {
      label: (
        <Link to="changelog">
          <AppLink icon={<UnorderedListOutlined />} label="Changelog" />
        </Link>
      ),
      key: "/changelog",
    },
  ];

  return (
    <Menu
      style={{ height: "100%", border: "0px" }}
      items={items}
      onClick={() => setOpenMenu(false)}
      selectedKeys={location.pathname}
    />
  );
};

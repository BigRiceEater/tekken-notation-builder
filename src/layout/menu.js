import { useRecoilState } from "recoil";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

import { appMenuStore } from "../store/frontend";
import { useEffect } from "react";

export const AppMenu = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
  const location = useLocation();

  // key must match the pathname of location from react-router-dom
  const items = [
    { label: <Link to="">Home</Link>, key: "/" },
    { label: <Link to="changelog">Changelog</Link>, key: "/changelog" },
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

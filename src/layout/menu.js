import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { appMenuStore } from "../store/frontend";

export const AppMenu = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore)

  const items = [
    { label: <Link to="">Home</Link>, key: "home" },
    { label: <Link to="changelog">Changelog</Link>, key: "changelog" },
  ];

  return <Menu style={{height: "100%", border : "0px"}} items={items} onClick={()=> setOpenMenu(false)}/>;
};

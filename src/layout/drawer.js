import { useRecoilState } from 'recoil';
import { Drawer } from "antd";
import { AppMenu } from "./menu";
import { appMenuStore } from "../store/frontend";

export const AppDrawer = ({onClose}) => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      width={256}
      onClose={()=> setOpenMenu(false)}
      open={openMenu}>
        <AppMenu />
      </Drawer>
  );
};

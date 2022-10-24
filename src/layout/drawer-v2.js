import { push as Drawer } from "react-burger-menu";
import { AppMenu } from "./menu";
import { useRecoilState } from "recoil";
import { appMenuStore } from "../store/frontend";

export const AppDrawer = () => {
  const [openMenu, setOpenMenu] = useRecoilState(appMenuStore);
  return (
    <Drawer
      isOpen={openMenu}
      onClose={setOpenMenu(false)}
      styles={styles}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}>
      <AppMenu />
    </Drawer>
  );
};

const styles = {
  bmBurgerButton: {
    display: "none",
  },
};

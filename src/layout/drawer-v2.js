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
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu : {
    background: 'white',
    padding: "2.5em 1.5em 0"
  }
};

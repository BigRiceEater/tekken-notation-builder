import { Drawer } from "antd";
import { AppMenu } from "./menu";

export const AppDrawer = ({open, onClose}) => {
  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      width={256}
      onClose={onClose}
      open={open}>
        <AppMenu />
      </Drawer>
  );
};

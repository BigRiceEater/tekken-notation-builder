import { Drawer } from "antd";

export const AppDrawer = ({open, onClose}) => {
  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      width={256}
      onClose={onClose}
      open={open}></Drawer>
  );
};

import { Drawer } from "antd";

export const AppMenu = ({open, onClose}) => {
  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      minWidth={350}
      onClose={onClose}
      open={open}></Drawer>
  );
};

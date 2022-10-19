import { Drawer } from "antd";

export const AppMenu = ({open, onClose}) => {
  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      width={256}
      onClose={onClose}
      open={open}></Drawer>
  );
};

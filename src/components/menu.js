import { useState } from "react";
import { Drawer } from "antd";

export const AppMenu = () => {

  const [open, setOpen] = useState(true)

  return (
    <Drawer
      title="Notation Builder"
      placement="left"
      minWidth={350}
      onClose={()=> setOpen(false)}
      open={open}></Drawer>
  );
};

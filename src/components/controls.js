import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";


const Controls = ({ data, onChange, onClipboardClick }) => {

  const [showClipboardButton , setShowClipboardButton] = useState(false)

  useEffect(()=>{
    const isMobile = window.innerWidth <= 576 ;
    setShowClipboardButton(!isMobile);
  })

  return (
    <Space>
      {showClipboardButton && (
        <Button
          type="default"
          icon={<CopyOutlined />}
          onClick={onClipboardClick}></Button>
      )}
      <Checkbox
        controlName="whiteBackgroundChecked"
        checked={data.whiteBackgroundChecked}
        onChange={onChange}>
        White Background
      </Checkbox>

      <Checkbox
        controlName="biggerCommands"
        checked={data.biggerCommands}
        onChange={onChange}>
        Bigger Commands
      </Checkbox>
    </Space>
  );
};

export default Controls;

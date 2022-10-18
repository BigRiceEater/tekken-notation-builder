import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";
import { useRecoilState, useRecoilValue } from "recoil";
import { controlConfigState } from "../store";

const Controls = ({ data, onChange, onClipboardClick }) => {
  const [showClipboardButton, setShowClipboardButton] = useState(false);
  const [controlConfig, setControlConfig] = useRecoilState(controlConfigState);
  
  useEffect(() => {
    const isMobile = window.innerWidth <= 576;
    setShowClipboardButton(!isMobile);
  });

  const handleControlConfigChanged = ({controlName, value}) =>{
    setControlConfig( prev => {
      return ({...prev, [controlName] : value})
    })
  }

  const { whiteBackgroundChecked } = controlConfig;


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
        checked={whiteBackgroundChecked}
        onChange={handleControlConfigChanged}>
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

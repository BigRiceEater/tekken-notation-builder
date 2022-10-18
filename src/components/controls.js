import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";
import { useRecoilState, useRecoilValue } from "recoil";
import { controlConfigState } from "../store";

const Controls = ({ onClipboardClick }) => {
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

  const { whiteBackgroundChecked, biggerCommandsChecked } = controlConfig;


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
        controlName="biggerCommandsChecked"
        checked={biggerCommandsChecked}
        onChange={handleControlConfigChanged}>
        Bigger Commands
      </Checkbox>
    </Space>
  );
};

export default Controls;

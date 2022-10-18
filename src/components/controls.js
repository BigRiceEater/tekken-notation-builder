import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";
import { useRecoilState } from "recoil";
import { appOptionsStore, appOptionKey } from "../store/app-options";

const Controls = ({ onClipboardClick }) => {
  const [showClipboardButton, setShowClipboardButton] = useState(false);
  const [appOptions, setAppOptions] = useRecoilState(appOptionsStore);

  useEffect(() => {
    const isMobile = window.innerWidth <= 576;
    setShowClipboardButton(!isMobile);
  });

  const handleControlConfigChanged = ({ controlName, value }) => {
    setAppOptions((prev) => {
      return { ...prev, [controlName]: value };
    });
  };

  const { whiteBackground, biggerCommands } = appOptionKey;
  const {
    [whiteBackground]: whiteBackgroundChecked,
    [biggerCommands]: biggerCommandsChecked,
  } = appOptions;

  return (
    <Space>
      {showClipboardButton && (
        <Button
          type="default"
          icon={<CopyOutlined />}
          onClick={onClipboardClick}></Button>
      )}
      <Checkbox
        controlName={whiteBackground}
        checked={whiteBackgroundChecked}
        onChange={handleControlConfigChanged}>
        White Background
      </Checkbox>

      <Checkbox
        controlName={biggerCommands}
        checked={biggerCommandsChecked}
        onChange={handleControlConfigChanged}>
        Bigger Commands
      </Checkbox>
    </Space>
  );
};

export default Controls;

import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";
import { useRecoilState } from "recoil";
import { appOptionsStore } from "../store/app-options";

const Controls = ({ onClipboardClick }) => {
  const [showClipboardButton, setShowClipboardButton] = useState(false);
  const [appOptions, setAppOptions] = useRecoilState(appOptionsStore);

  useEffect(() => {
    const isMobile = window.innerWidth <= 576;
    setShowClipboardButton(!isMobile);
  });

  const handleAppOptionsChanged = ({ controlName, value }) => {
    setAppOptions((prev) => {
      return { ...prev, [controlName]: value };
    });
  };

  const { whiteBackground, biggerCommands } = appOptions;

  return (
    <Space>
      {showClipboardButton && (
        <Button
          type="default"
          icon={<CopyOutlined />}
          onClick={onClipboardClick}></Button>
      )}
      <Checkbox
        controlName="whiteBackground"
        checked={whiteBackground}
        onChange={handleAppOptionsChanged}>
        White Background
      </Checkbox>

      <Checkbox
        controlName="biggerCommands"
        checked={biggerCommands}
        onChange={handleAppOptionsChanged}>
        Bigger Commands
      </Checkbox>
    </Space>
  );
};

export default Controls;

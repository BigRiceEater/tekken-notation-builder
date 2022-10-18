import React from "react";
import { Button, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";

const Controls = ({ data, onChange, onClipboardClick }) => {
  return (
    <Space>
      <Button
        type="default"
        icon={<CopyOutlined />}
        onClick={onClipboardClick}></Button>

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

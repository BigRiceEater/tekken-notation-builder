import React from "react";
import { Row, Col, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Checkbox from "./control-checkbox";

const Controls = ({ data, onChange, onClipboardClick }) => {
  console.log(data);
  return (
    <Row align="middle">
      <Col>
        <Button type="default" icon={<CopyOutlined />} onClick={onClipboardClick}></Button>
      </Col>
      <Col>
        <Checkbox
          controlName="whiteBackgroundChecked"
          checked={data.whiteBackgroundChecked}
          onChange={onChange}>
          White Background
        </Checkbox>
      </Col>
      <Col>
        <Checkbox
          controlName="biggerCommands"
          checked={data.biggerCommands}
          onChange={onChange}>
          Bigger Commands
        </Checkbox>
      </Col>
    </Row>
  );
};

export default Controls;

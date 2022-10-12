import React from "react";
import { Row, Col } from "antd";
import Checkbox from "./control-checkbox";

const Controls = ({ data, onChange }) => {
  console.log(data);
  return (
    <Row>
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

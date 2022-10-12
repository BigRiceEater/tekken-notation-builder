import React, { useState } from "react";
import { Row, Col, Input, Button } from "antd";

const { TextArea } = Input;

const CommandInput = ({ handleClick }) => {
  const [commandNotation, setCommandNotation] = useState("");
  return (
    <Row>
      <Col span={18}>
        <Input
          placeholder="Command Notation"
          onChange={(val) => setCommandNotation(val)}
        />
      </Col>
      <Col span={6}>
        <Button block type="primary" onClick={() => handleClick(commandNotation)}>
          Generate
        </Button>
      </Col>
    </Row>
  );
};

export default CommandInput;

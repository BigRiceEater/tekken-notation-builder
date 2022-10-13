import React, { useState } from "react";
import { Row, Col, Input, Button } from "antd";

const { TextArea } = Input;

const CommandInput = ({ onClick }) => {
  const [commandNotation, setCommandNotation] = useState("");
  return (
    <Row gutter={[16,0]}>
      <Col span={18}>
        <Input
          style={{fontSize : 16}}
          placeholder="Command Notation"
          onChange={(event) => setCommandNotation(event.target.value)}
        />
      </Col>
      <Col span={6} style={{alignSelf : "center"}}>
        <Button block type="primary" onClick={() => onClick(commandNotation)}>
          Go!
        </Button>
      </Col>
    </Row>
  );
};

export default CommandInput;

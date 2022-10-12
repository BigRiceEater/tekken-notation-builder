import React from "react";
import { Col } from "antd";

const Section = (props) => {
  return (
    <Col xs={24} sm={16}>
      {props.children}
    </Col>
  );
};

export default Section;

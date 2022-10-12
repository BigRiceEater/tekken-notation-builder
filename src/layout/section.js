import React from "react";
import { Col } from "antd";

const Section = (props) => {
  return (
    <Col xs={24} md={16}>
      {props.children}
    </Col>
  );
};

export default Section;

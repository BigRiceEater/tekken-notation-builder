import React from "react";
import { Col } from "antd";

const Section = (props) => {
  return (
    <Col span={16} offset={4}>
      {props.children}
    </Col>
  );
};

export default Section;

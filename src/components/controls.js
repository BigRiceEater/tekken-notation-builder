import React from "react";
import { Row, Col, Checkbox } from "antd";

const Controls = ({ data, onChange }) => {

  console.log(data)
  return (
    <Row>
      <Col>
        <Checkbox
          onChange={(event) => {
            onChange({
              controlName: "whiteBackgroundChecked",
              value: event.target.checked,
            });
          }}
          checked={data.whiteBackgroundChecked}>
          White Background
        </Checkbox>
      </Col>
    </Row>
  );
};

export default Controls;

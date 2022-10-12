import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { grey } from "@ant-design/colors";

const ComboSeperator = ({ invertColor }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      size="lg"
      style={{ color: invertColor ? "black" : "white" }}
    />
  );
};

export default ComboSeperator;

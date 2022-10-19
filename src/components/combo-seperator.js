import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ComboSeperator = ({ invertColor, bigger = false }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      size={bigger ? "2x" : "lg"}
      style={{ padding: "0px 6px", color: invertColor ? "black" : "white" }}
    />
  );
};

export default ComboSeperator;

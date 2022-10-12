import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ComboSeperator = (props) => {
  return (
    <FontAwesomeIcon icon={faChevronRight} size="lg" style={{color: "white" }}/>
  )
}

export default ComboSeperator;
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ComboSeperator = (props) => {
  return (
    <FontAwesomeIcon icon={faChevronRight} size="lg" style={{text: "white"}}/>
  )
}

export default ComboSeperator;
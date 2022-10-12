import React, { useState, useEffect } from "react";
import { purple, grey } from "@ant-design/colors";

import ComboSeperator from "./combo-seperator";


const VisualizeCommand = ({ data }) => {
  const [commands, setCommands] = useState([]);

  const SP_CMD = {
    qcf: ["d", "df", "f"],
    qcb: ["d", "df", "f"],
    dp: ["f", "d", "df"],
  };

  useEffect(() => {
    setCommands(sanitizeCommand(data));
  }, [data]);

  function sanitizeCommand(cmdStr) {
    // remove all spaces
    const dataNoSpaces = data.toLowerCase().replace(/\s/g, "");
    // artificially add the limit symbol for pseudo command so we can split properly without user writing this themselves
    const addLimiterForAngleSymbol = dataNoSpaces.replace(">", ",>,");
    // split into array by . and , because '>' is actually a pseudo command
    const splitCommands = addLimiterForAngleSymbol.split(/[\.,]+/);
    // remove all empty elements
    const sanitizedCommands = splitCommands.filter((c) => c);

    return sanitizedCommands;
  }

  const renderCommand = (cmd) => {
    console.log('render',cmd)
    return (
      <img style={styles.command} src={require(`../assets/${cmd}.svg`)} />
    )
  };

  return (
    <div style={styles.container}>
      {
        commands.map( command  => {
          switch (command) {
            case "qcf":
              return SP_CMD.qcf.map(c => renderCommand(c))
            break;
            case ">":
              return <ComboSeperator/>
            break;
            default:
              return renderCommand(command);
          }
        })
      }
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: 16,
    minHeight: 88,
    background: grey[2],
    borderRadius: 8,
    border: `2px solid ${purple}`,
    alignItems: "center"
  },
  command: {
    width: 32,
  },
};

export default VisualizeCommand;

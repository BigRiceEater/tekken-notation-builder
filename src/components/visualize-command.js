import React, { useState, useEffect } from "react";
import { purple, grey } from '@ant-design/colors'

const VisualizeCommand = ({ data }) => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    setCommands(sanitizeCommand(data));
  }, [data]);

  function sanitizeCommand(cmdStr){
    // remove all spaces
    const dataNoSpaces = data.replace(/\s/g, "");
    // artificially add the limit symbol for pseudo command so we can split properly without user writing this themselves
    const addLimiterForAngleSymbol = dataNoSpaces.replace('>', ",>,");
    // split into array by . and , because '>' is actually a pseudo command
    const splitCommands = addLimiterForAngleSymbol.split(/[\.,]+/);
    // remove all empty elements
    const sanitizedCommands = splitCommands.filter((c) => c);

    return sanitizedCommands;
  }

  return (
    <div style={styles.container}>
      {commands.map((command) => (
        <img style={styles.command} src={require(`../assets/${command}.svg`)} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding : 16,
    minHeight : 88,
    background: grey[2],
    borderRadius : 8,
    border: `2px solid ${purple}`
  },
  command: {
    width: 32
  }
};

export default VisualizeCommand;

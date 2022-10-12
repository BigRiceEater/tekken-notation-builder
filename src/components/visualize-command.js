import React, { useState, useEffect } from "react";
import { purple, grey } from '@ant-design/colors'

const COMMAND = {
  back: "b",
  forward: "f",
  down: "d",
  downforward: "df",
  downback: "db",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

const VisualizeCommand = ({ data }) => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    setCommands(sanitizeCommand(data));
  }, [data]);

  function sanitizeCommand(cmdStr){
    // remove all spaces
    const dataNoSpaces = data.replace(/\s/g, "");
    // split into array by . , and > but the problem is > is also a pseudo command
    const splitCommands = dataNoSpaces.split(/[\.,>]+/);
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

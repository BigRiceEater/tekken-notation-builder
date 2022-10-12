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
    const dataNoSpaces = data.replace(/\s/g, "");
    const splitCommands = dataNoSpaces.split(/[\.,>]+/);
    const sanitizedCommands = splitCommands.filter((c) => c);
    if (sanitizedCommands.length > 0) {
      setCommands(sanitizedCommands);
    }
  }, [data]);

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

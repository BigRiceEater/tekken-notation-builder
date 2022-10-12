import React, { useState, useEffect } from "react";

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
        <img src={require(`../assets/${command}.svg`)} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
};

export default VisualizeCommand;

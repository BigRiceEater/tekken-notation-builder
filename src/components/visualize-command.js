import React, { useState, useEffect } from "react";
import { purple, grey } from "@ant-design/colors";

import Command from "./command";
import ComboSeperator from "./combo-seperator";

import { sanitize } from "../util/commands";

const VisualizeCommand = ({ data, options = {} }) => {
  const [commands, setCommands] = useState([]);

  const SP_CMD = {
    qcf: ["d", "df", "f"],
    qcb: ["d", "df", "f"],
    dp: ["f", "d", "df"],
  };

  useEffect(() => {
    setCommands(sanitize(data));
  }, [data]);

  const renderCommand = (cmd) => {
    return <Command icon={cmd} options={options} />;
  };

  return (
    <div
      style={{
        ...styles.container,
        background: options.whiteBackgroundChecked ? "white" : grey[2],
      }}>
      {commands.map((command, idx) => {
        switch (command) {
          case "qcf":
            return;
            <React.Fragment key={idx}>
              {SP_CMD.qcf.map((cmd) => renderCommand(cmd))}
            </React.Fragment>;
            break;
          case ">":
            return (
              <ComboSeperator
                key={idx}
                invertColor={options.whiteBackgroundChecked}
                bigger={options.biggerCommands}
              />
            );
            break;
          default:
            return renderCommand(command);
        }
      })}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: 16,
    minHeight: 88,
    borderRadius: 8,
    border: `2px solid ${purple}`,
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: "12px",
  },
  command: {
    width: 32,
  },
};

export default VisualizeCommand;

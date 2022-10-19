import React, { useEffect } from "react";
import { purple, grey } from "@ant-design/colors";

import Command from "./command";
import ComboSeperator from "./combo-seperator";

import * as htmlToImage from "html-to-image";
import { toBlob } from "html-to-image";

import { appOptionsStore } from "../store/app-options";
import { useRecoilValue } from "recoil";

const VisualizeCommand = ({ commands = [], clipboard = {} }) => {
  const appOptions = useRecoilValue(appOptionsStore); 

  const SP_CMD = {
    qcf: ["d", "df", "f"],
    qcb: ["d", "df", "f"],
    dp: ["f", "d", "df"],
  };

  const renderCommand = (cmd) => {
    return <Command icon={cmd} />;
  };

  useEffect(() => {
    if (clipboard.triggered) {
      const commandsContainer = document.getElementById("commands-container");
      htmlToImage.toBlob(commandsContainer).then((blob) => {
        navigator.clipboard
          .write([
            new window.ClipboardItem({
              "image/png": blob,
            }),
          ])
          .then(() => {
            clipboard.done();
          });
      });
    }
  });

  const { whiteBackground, biggerCommands } = appOptions;

  return (
    <React.Fragment>
      <div
        id="commands-container"
        style={{
          ...styles.container,
          background: whiteBackground ? "white" : grey[2],
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
                  invertColor={whiteBackground}
                  bigger={biggerCommands}
                />
              );
              break;
            default:
              return <div key={idx}>{renderCommand(command)}</div>;
          }
        })}
      </div>
    </React.Fragment>
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
  imageContainer: {},
};

export default VisualizeCommand;

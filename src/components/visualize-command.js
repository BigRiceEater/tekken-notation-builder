import React, { useState, useEffect } from "react";
import { purple, grey } from "@ant-design/colors";

import Command from "./command";
import ComboSeperator from "./combo-seperator";

import { sanitize } from "../util/commands";

import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

const VisualizeCommand = ({ commands = [], options = {} }) => {

  const [commandsImage, setCommandsImage] = useState(null);

  const SP_CMD = {
    qcf: ["d", "df", "f"],
    qcb: ["d", "df", "f"],
    dp: ["f", "d", "df"],
  };

  const renderCommand = (cmd) => {
    return <Command icon={cmd} options={options} />;
  };

  useEffect(() => {
    const imageContainer = document.getElementById("image-container");
    const commandsContainer = document.getElementById("commands-container");
    const oldImage = document.getElementById('commands-as-image');
    htmlToImage.toPng(commandsContainer).then((dataUrl) => {
      // const img = new Image();
      // img.src = dataUrl;
      // imageContainer.replaceChild(img,oldImage);
      setCommandsImage(dataUrl);
    });
  });

  return (
    <React.Fragment>
      <div
        id="commands-container"
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
      <div id="image-container" style={styles.imageContainer}>
        <img id="commands-as-image" src={commandsImage} />
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
  imageContainer:{
    
  }
};

export default VisualizeCommand;

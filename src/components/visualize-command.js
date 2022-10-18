import React, { useState, useEffect } from "react";
import { purple, grey } from "@ant-design/colors";

import Command from "./command";
import ComboSeperator from "./combo-seperator";

import { sanitize } from "../util/commands";

import * as htmlToImage from "html-to-image";
import { toBlob } from "html-to-image";

import {Button} from "antd"

const VisualizeCommand = ({ commands = [], options = {}, clipboard = {}}) => {
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
    if (clipboard.triggered){
      const commandsContainer = document.getElementById('commands-container');
      htmlToImage.toBlob(commandsContainer).then(blob =>{
        navigator.clipboard.write([
          new window.ClipboardItem({
            'image/png' : blob
          })
        ]).then(()=>{
          console.log('done')
          clipboard.done();
        })
      })
    }
  });

  async function toClipboardAsync(){
    const commandsContainer = document.getElementById('commands-container');
    htmlToImage.toBlob(commandsContainer).then(async blob =>{
      await navigator.clipboard.write([
        new window.ClipboardItem({
          'image/png' : blob
        })
      ])
    })
  }

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

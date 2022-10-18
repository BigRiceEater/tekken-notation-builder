import React, { useState } from "react";
import Section from "../layout/section";
import CommandInput from "../components/command-input";
import VisualizeCommand from "../components/visualize-command";
import Controls from "../components/controls";
import showErrorToast from "../util/error-toast";
import showSuccessToast from "../util/success-toast";
import { sanitize, isValid } from "../util/commands";

const Home = () => {
  const [commands, setCommands] = useState([]);
  const [clipboard, setClipboard] = useState({done : ()=>{

  }, triggered : false});
  const [controlConfig, setControlConfig] = useState({
    whiteBackgroundChecked: false,
    biggerCommands: false,
  });

  const handleVisualizeCommandClicked = (cmdString) => {
    const cmds = sanitize(cmdString);
    const errors = isValid(cmds);

    errors.forEach((err) => {
      cmds[err.index] = "error";
      showErrorToast(err)
    });

    setCommands(cmds);
  };

  const handleControlChanged = ({ controlName, value }) => {
    setControlConfig((config) => ({ ...config, [controlName]: value }));
  };

  const handleClipboardClicked = () => {
    setClipboard({done : handleClipboardDone, triggered : true})
  }

  const handleClipboardDone = () =>{
    showSuccessToast("Copied!")
    setClipboard({triggered : false})
  }

  return (
    <React.Fragment>
      <Section>
        <CommandInput onClick={handleVisualizeCommandClicked} />
      </Section>
      <Section>
        <VisualizeCommand commands={commands} options={controlConfig} clipboard={clipboard}/>
      </Section>
      <Section>
        <Controls data={controlConfig} onChange={handleControlChanged} onClipboardClick={handleClipboardClicked}/>
      </Section>
    </React.Fragment>
  );
};

export default Home;

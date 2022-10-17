import React, { useState } from "react";
import Section from "../layout/section";
import CommandInput from "../components/command-input";
import VisualizeCommand from "../components/visualize-command";
import Controls from "../components/controls";
import ErrorToast from "../components/error-toast";
import { sanitize, isValid } from "../util/commands";

const Home = () => {
  const [commands, setCommands] = useState({data:[], errors:[]});
  const [controlConfig, setControlConfig] = useState({
    whiteBackgroundChecked: false,
    biggerCommands: false,
  });

  const handleVisualizeCommandClicked = (cmdString) => {
    console.log("Off we go ...");
    const data = sanitize(cmdString);
    const errors = isValid(data);

    errors.forEach((err) => {
      data[err.index] = "error";
    });

    setCommands({data,errors});
  };

  const handleControlChanged = ({ controlName, value }) => {
    console.log("Setting config after control has changed");
    setControlConfig((config) => ({ ...config, [controlName]: value }));
  };

  const { data, errors } = commands;
 
  return (
    <React.Fragment>
      <Section>
        <CommandInput onClick={handleVisualizeCommandClicked} />
      </Section>
      <Section>
        <VisualizeCommand commands={data} options={controlConfig} />
      </Section>
      <Section>
        <Controls data={controlConfig} onChange={handleControlChanged} />
      </Section>
      {errors.map(({ cmd, index }) => {
        return <ErrorToast key={index} cmd={cmd} />;
      })}
    </React.Fragment>
  );
};

export default Home;

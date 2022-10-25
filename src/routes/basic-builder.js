import { useState } from "react";
import Section from "../layout/section";
import VisualizeCommand from "../components/visualize-command";
import { DragCommands } from "../components/draggable-builder/drag-commands";

export const BasicBuilder = () => {
  const [commands, setCommands] = useState([]);

  return (
    <>
      <Section>
        <DragCommands />
      </Section>
    </>
  );
};

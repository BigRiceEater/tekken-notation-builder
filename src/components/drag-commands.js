import { useState } from "react";
import { DraggableArea } from "react-draggable-tags";
import { Row, Col, Space, Button } from "antd";
import { nanoid } from "nanoid";
import Command from "./command";
import { CommandName } from "../util/command-name";

import { DragDropContext } from "react-beautiful-dnd";

const buildAvailableTags = () => {
  return Object.values(CommandName).map((icon) => ({
    id: nanoid(),
    content: <Command icon={icon} />,
  }));
};

export const DragCommands = () => {
  const availableTags = buildAvailableTags();

  const [commandTags, setCommandTags] = useState([]);
  const [commands, setCommands] = useState([]);

  const renderTag = ({ tag }) => tag.content;

  const handleDragEnd = (result) => {
    // dropped outside droppable area
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const newCommands = Array.from(commands);
    const [removed] = result.splice(startIndex, 1);
    newCommands.splice(endIndex, 0, removed);

    setCommands(newCommands);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DraggableArea
            style={styles.dragArea}
            tags={commandTags}
            render={renderTag}
            onChange={(tags) => setCommandTags(tags)}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          span={24}>
          {availableTags.map((tag) => {
            const { id, content } = tag;
            return (
              <Button
                key={id}
                onClick={() =>
                  setCommandTags((prev) => [...prev, { id: nanoid(), content }])
                }>
                {content}
              </Button>
            );
          })}
        </Col>
      </Row>
    </DragDropContext>
  );
};

const styles = {
  tags: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderRadius: 8,
    border: `2px solid black`,
    minWidth: 64,
  },
  dragArea: {
    backgroundColor: "white",
    padding: 16,
    minHeight: 88,
    width: "100%",
    borderRadius: 8,
  },
};

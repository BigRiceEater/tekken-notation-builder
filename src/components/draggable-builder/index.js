import { useState } from "react";
import { DraggableArea } from "react-draggable-tags";
import { Row, Col, Space, Button } from "antd";
import { nanoid } from "nanoid";
import Command from "../command";
import { CommandName } from "../../util/command-name";
import { BuilderPallete } from "./pallete";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// Droppable = the area
// Draggable = the item

export const DragCommands = () => {

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
    const [removed] = newCommands.splice(startIndex, 1);
    newCommands.splice(endIndex, 0, removed);

    setCommands(newCommands);
  };

  const grid = 8;
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    height : "100%",

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "#00000000",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey"
  });

  const handlePalleteClicked = (item) =>{
    setCommands(prev => [...prev, item])
  }

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable
            droppableId="our-droppable"
            style={styles.dragArea}
            direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  ...styles.dragArea,
                  ...getListStyle(snapshot.isDraggingOver),
                }}>
                {commands.map((cmd, idx) => (
                  <Draggable key={cmd.id} draggableId={cmd.id} index={idx}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}
                        >
                        <Command icon={cmd.icon} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Col>

      <Col
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        span={24}>
        <BuilderPallete onClick={handlePalleteClicked} />
      </Col>
    </Row>
  );
};

const styles = {
  dragArea: {
    display: "flex",
    backgroundColor: "white",
    padding: 16,
    minHeight: 88,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    flexWrap: "wrap",
  },
};

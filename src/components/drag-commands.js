import { useState } from "react";
import { DraggableArea } from "react-draggable-tags";
import { Row, Col, Space, Button } from "antd";
import { nanoid } from 'nanoid'

export const DragCommands = () => {

  const availableTags = [
    { id: 1, content: "down" },
    { id: 2, content: "up" },
  ];

  const [commandTags, setCommandTags] = useState([]);

  const renderTag = ({ tag }) => <div style={styles.tags}>{tag.content}</div>;

  return (
    <>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DraggableArea
            style={styles.dragArea}
            tags={commandTags}
            render={renderTag}
            onChange={tags => setCommandTags(tags)}
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
                onClick={() => setCommandTags((prev) => [...prev, {id : nanoid(), content}])}>
                {content}
              </Button>
            );
          })}
        </Col>
      </Row>
    </>
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

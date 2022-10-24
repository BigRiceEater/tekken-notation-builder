import { useState } from "react";
import { DraggableArea } from "react-draggable-tags";
import { Row, Col, Space, Button } from "antd";

export const DragCommands = () => {

  const availableTags = [
    { id: 1, content: "down" },
    { id: 2, content: "up" },
  ];

  const [builderTags, setBuilderTags] = useState([]);

  const renderTag = ({ tag }) => <div style={styles.tags}>{tag.content}</div>;

  const handleBuilderDragged = (tags, { fromArea, toArea }) => {
    setBuilderTags(tags);
  };

  return (
    <>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DraggableArea
            style={styles.dragArea}
            tags={builderTags}
            render={renderTag}
            
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
                onClick={() => setBuilderTags((prev) => [...prev, tag])}>
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

import { useState } from "react";
import { DraggableAreasGroup } from "react-draggable-tags";
import { Row, Col } from "antd";

export const DragCommands = () => {
  const group = new DraggableAreasGroup();
  const BuilderArea = group.addArea("builder");
  const ToolsetArea = group.addArea("toolset");

  const availableTags = [{ id: 1, content: "down" }, {id : 2, content : "up"}];

  const [builderTags, setBuilderTags] = useState([]);
  const [toolsetTags, setToolsetTags] = useState(availableTags);


  const renderTag = ({ tag }) => <div style={styles.tags}>{tag.content}</div>;

  const handleDragged = (tags, {fromArea, toArea}) => {
    const { id : from } = fromArea;
    if (from === "toolset"){
      setBuilderTags(tags);
    }
    else if (from === "builder"){
      setBuilderTags(tags);
    }
  }

  const handleBuilderDragged = (tags, {fromArea, toArea}) => {
    setBuilderTags(tags);
  }

  const handleToolsetDragged = (tags, {fromArea, toArea}) => {
    const { id : to } = toArea;
    if (to === "toolset"){
      setToolsetTags(availableTags)
    }
  }

  return (
    <>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <BuilderArea
            style={styles.dragArea}
            tags={builderTags}
            render={renderTag}
            onChange={handleBuilderDragged}
          />
        </Col>
        <Col span={24}>
          <ToolsetArea
            style={styles.dragArea}
            tags={toolsetTags}
            render={renderTag}
            onChange={handleToolsetDragged}
          />
        </Col>
      </Row>
    </>
  );
};

const styles = {
  tags: {
    display: "flex",
    justifyContent : "center",
    color: "black",
    backgroundColor: "white",
    padding: 5,
    margin : 5,
    borderRadius: 8,
    border: `2px solid black`,
    minWidth : 64
    
  },
  dragArea: {
    backgroundColor: "white",
    padding: 16,
    minHeight: 88,
    borderRadius: 8,
  },
};

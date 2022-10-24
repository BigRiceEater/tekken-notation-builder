import { useState } from "react";
import { DraggableAreasGroup } from "react-draggable-tags";
import { Row, Col } from "antd";

export const DragCommands = () => {
  const group = new DraggableAreasGroup();
  const BuilderArea = group.addArea("builder");
  const ToolsetArea = group.addArea("toolset");

  const [builderTags, setBuilderTags] = useState([]);

  const availableTags = [{ id: 1, content: "down" }];


  const renderTag = ({tag}) => (
      <div style={styles.tags}>
        {tag.content}
      </div>
  )

  return (
    <>
      <Row gutter={[0,16]}>
        <Col span={24}>
          <BuilderArea style={styles.dragArea} tags={builderTags} render={renderTag}/>
        </Col>
        <Col span={24}>
          <ToolsetArea
            style={styles.dragArea}
            tags={availableTags}
            render={renderTag}
          />
        </Col>
      </Row>
    </>
  );
};

const styles = {
  tags : {
    color : 'black',
    backgroundColor : "white",
    padding : 5,
    borderRadius: 8,
    border: `2px solid black`,
  },
  dragArea : {
    backgroundColor : "white",
    padding: 16,
    minHeight: 88,
    borderRadius: 8,
  }
}
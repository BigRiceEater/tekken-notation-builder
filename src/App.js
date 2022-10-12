import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CommandInput from "./components/command-input";
import VisualizeCommand from "./components/visualize-command";
import Controls from "./components/controls";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

function App() {
  const [commandString, setCommandString] = useState("");
  const [controlConfig, setControlConfig] = useState({
    whiteBackgroundChecked : false,
  })

  const handleVisualizeCommandClicked = (cmd) => {
    console.log(cmd);
    setCommandString(cmd);
  };

  const handleControlChanged = ({controlName, value}) =>{
    console.log('Setting config after control has changed')
    setControlConfig( config => ({...config, [controlName] : value}))
  }

  return (
    <Layout style={{ height: "100vh", padding: 24 }}>
      <Content>
        <Row gutter={[16, 16]}>
          <Col span={16} offset={4}>
            <CommandInput onClick={handleVisualizeCommandClicked} />
          </Col>
          <Col span={16} offset={4}>
            <VisualizeCommand data={commandString} />
          </Col>
          <Col span={16} offset={4}>
            <Controls data={controlConfig} onChange={handleControlChanged} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;


import {useState} from 'react'
import logo from "./logo.svg";
import "./App.css";
import CommandInput from "./components/command-input";
import VisualizeCommand from "./components/visualize-command";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

function App() {

  const [commandString, setCommandString] = useState('');

  const handleVisualizeCommandClicked = cmd =>{
    console.log(cmd);
    setCommandString(cmd)
  }


  return (
    <Layout style={{height:"100vh", padding: 24}}>
      <Content>
        <Row>
          <Col span={16} offset={4}>
            <CommandInput onClick={handleVisualizeCommandClicked}/>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <VisualizeCommand data={commandString} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CommandInput from "./components/command-input";
import VisualizeCommand from "./components/visualize-command";
import Controls from "./components/controls";
import Section from "./layout/section";
import { Layout, Row, Col, Divider } from "antd";
import packageData from "../package.json"

const { Content, Footer } = Layout;

function App() {
  const [commandString, setCommandString] = useState("");
  const [controlConfig, setControlConfig] = useState({
    whiteBackgroundChecked : false,
    biggerCommands : false
  })

  const handleVisualizeCommandClicked = (cmd) => {
    setCommandString(cmd);
  };

  const handleControlChanged = ({controlName, value}) =>{
    console.log('Setting config after control has changed')
    setControlConfig( config => ({...config, [controlName] : value}))
  }

  return (
     // T R B L
    <Layout style={styles.container}>
      <Content>
        <Row justify="center" gutter={[16, 16]}>
          <Section>
            <CommandInput onClick={handleVisualizeCommandClicked} />
          </Section>
          <Section>
            <VisualizeCommand data={commandString} options={controlConfig}/>
          </Section>
          <Section>
            <Controls data={controlConfig} onChange={handleControlChanged} />
          </Section>
        </Row>
      </Content>
      <Footer>
        <Divider orientation="center" plain>Version {packageData.version}</Divider>
      </Footer>
    </Layout>
  );
}

const styles = {
  container : {
    height:"100%",
    paddingTop: 24,
    paddingBottom : 0,
    paddingLeft: 24,
    paddingRight: 24
  },
  footer : {
    
  }
}

export default App;

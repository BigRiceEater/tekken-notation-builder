import logo from "./logo.svg";
import "./App.css";
import CommandInput from "./components/command-input";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

function App() {
  return (
    <Content>
      <Row gutter={[16,0]}>
        <Col span={24}>
          <CommandInput />
        </Col>
      </Row>
    </Content>
  );
}

export default App;

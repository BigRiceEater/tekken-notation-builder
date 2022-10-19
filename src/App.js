import { useState } from "react";
import "./App.css";

import { Layout, Row, Col, Divider } from "antd";
import packageData from "../package.json"

import Home from './routes/home'

import {
  Routes,
  Route,
} from "react-router-dom";

const { Content, Footer } = Layout;

function App() {

  return (
     // T R B L
    <Layout style={styles.container}>
      <Content>
        <Row justify="center" gutter={[16, 16]}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
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

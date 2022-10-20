import { Outlet } from "react-router-dom";
import { Layout, Row } from "antd";
import { Space, Button } from "antd";
import { AppToastContainer } from "./toast-container";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";

const { Content, Header } = Layout;

const Root = () => {
  return (
    <Layout style={{minHeight : "100%"}}>
      <AppHeader />
      <Content style={styles.container}>
        <Row justify="center" gutter={[16, 16]}>
          <Outlet />
        </Row>
      </Content>
      <AppFooter />

      <AppToastContainer />
    </Layout>
  );
};

const styles = {
  container: {
    height: "100%",
    paddingTop: 24,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
  },
};

export default Root;

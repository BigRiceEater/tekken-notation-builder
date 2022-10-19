import { Link, Outlet } from "react-router-dom";
import { Layout, Row } from "antd";
import { Space, Button } from "antd";
import { AppToastContainer } from "./toast-container";
import { AppFooter } from "./footer";
import { AppMenu } from "./menu";

const { Content, Header } = Layout;

const Root = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <Space>
          <Button>Menu</Button>
        </Space>
      </Header>
      <Content style={styles.container}>
        <Row justify="center" gutter={[16, 16]}>
          <Outlet />
        </Row>
      </Content>
      <AppFooter />

      <AppMenu />
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

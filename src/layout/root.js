import { Link, Outlet } from "react-router-dom";
import { Layout, Row } from "antd";
import { AppToastContainer } from "../components/toast-container";
import { AppFooter } from "../components/footer";

const { Content } = Layout;

const Root = () => {
  return (
    <Layout style={styles.container}>
      <Content>
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
  }
};

export default Root;

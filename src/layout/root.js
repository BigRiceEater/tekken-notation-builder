import { Link, Outlet } from "react-router-dom";
import { Layout, Row, Divider, Typography } from "antd";
import { AppToastContainer } from "../components/toast-container";
import "react-toastify/dist/ReactToastify.css";
import packageData from "../../package.json";

const { Content, Footer } = Layout;
const { Link: Hyperlink } = Typography;

const Root = () => {
  return (
    <Layout style={styles.container}>
      <Content>
        <Row justify="center" gutter={[16, 16]}>
          <Outlet />
        </Row>
      </Content>
      <Footer>
        <Divider orientation="center" plain>
          Version {packageData.version} :{" "}
          <Hyperlink
            href="https://github.com/BigRiceEater/tekken-notation-builder/issues"
            target="blank">
            Report an issue
          </Hyperlink>
        </Divider>
      </Footer>
      <AppToastContainer/>
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
  footer: {},
};

export default Root;

import { Link, Outlet } from "react-router-dom";
import { Layout, Row, Divider, Typography } from "antd";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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

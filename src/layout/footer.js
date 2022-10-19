import { Layout, Divider, Typography } from "antd";
import packageData from "../../package.json";

const { Link: Hyperlink } = Typography;
const { Footer } = Layout;

export const AppFooter = () => (
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
);

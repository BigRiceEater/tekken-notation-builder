import { Layout, Space, Button } from "antd";
const { Header } = Layout;

export const AppHeader = () => (
  <Header style={{ backgroundColor: "white" }}>
    <Space>
      <Button>Menu</Button>
    </Space>
  </Header>
);

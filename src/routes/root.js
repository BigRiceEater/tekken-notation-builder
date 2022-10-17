import { Outlet } from "react-router-dom"
import { Layout , Row, Divider} from 'antd';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import packageData from "../../package.json"

const { Content, Footer } = Layout;

const Root = () =>{
  return (
   <Layout style={styles.container}>
     <Content>
       <Row justify="center" gutter={[16, 16]}>
         <Outlet />
       </Row>
     </Content>
     <Footer>
       <Divider orientation="center" plain>Version {packageData.version}</Divider>
     </Footer>
     <ToastContainer />
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


export default Root;
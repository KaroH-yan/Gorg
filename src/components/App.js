import React, {useEffect, useState} from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Route, Routes, useLocation} from "react-router-dom";

import Header from './Header'
import List from '../pages/List';
import AddingForm from '../pages/AddingForm'
import { useFetch } from '../utils/hook';
import AricleList from '../pages/AricleList';

const {  Content, Footer, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});



const App = () => {
  const [list, setList] = useState([]);

  async function fetchUrl(url) {
    const response = await fetch(url)
    const json = await response.json();
  
    setList(json);      
  };
  useEffect(() => {
      fetchUrl(process.env.REACT_APP_LOADING_PARTNER_URI)
  }, [list.length]);

  const Partners=list.map(item=>({ key: item._id, icon: React.createElement(UserOutlined), label:item.name}))
  //console.log("REACT_APP_COMPANY_UIR", process.env.REACT_APP_COMPANY_UIR)

  
  const location=useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout >
   
<Header/>

      <Content style={{padding: '0 50px',}}>
        <Breadcrumb style={{ margin: '16px 0',}}>
       {/*<Breadcrumb.Item>{location.state?`${location.state.name}`: ""}</Breadcrumb.Item> */}

        </Breadcrumb>
        <Layout style={{padding: '24px 0', background: colorBgContainer, }}  >
         
         {location.pathname==='/Statistics'
         ? <Sider style={{  background: colorBgContainer,}} width={200}  >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', }}
              items={Partners.length? Partners:[]}
            />
          </Sider>:<></>}
          <Content style={{ padding: '0 24px',  minHeight: 280,}}>
            <Routes>
              <Route exact path="/" element={<List  list={list} />}/>
              <Route exact path="/Statistics" element={ <AricleList />}/>
              <Route exact path="/addPartenr"  element={ <AddingForm />}/>
              
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', }} >
         ©{`${new Date().getFullYear()}`} Created by ..
      </Footer>
    </Layout>
  );
};
export default App;
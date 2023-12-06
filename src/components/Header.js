import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation} from "react-router-dom";
import { Menu, Layout } from 'antd';


const navigation = [
    { label: "Home", key: "/" },
    { label: "Statistics", key: "/Statistics" },
    { label: "Add Partenr", key: "/addPartenr" },
  ];

const {  Header } = Layout;
export default () => {
   
    const [location, setLocation]=useState(useLocation())
    const navigate = useNavigate();
    const getlocation=useLocation();
    useEffect(() => {
        setLocation(navigation.find((item) => item.key === location.pathname))
    },[])
    const handleMenuClick = ({ key }) => {
        if(key){
            navigate(key,{state:{name: navigation.find((item) => item.key === key).label} })
            setLocation(navigation.find((item) => item.key === key))
        } else {
            navigate('/', {state:{name: navigation.find((item) => item.key === '/').label} })
           // setLocation(navigation.find((item) => item.key === '/'))
        };
        
        
    };
  return(
    <>
    {/*<Header style={{display: 'flex',alignItems: 'center', }}>*/}
        <div className="demo-logo" />
        <Menu 
            theme="dark"
            mode="horizontal" 
            defaultSelectedKeys={location.key} 
            selectedKeys={location.key}
            items={navigation}  
            onClick={handleMenuClick} 
            style={{display: 'flex',alignItems: 'center'}} 
        />
     {/*</Header> */}
     </>
  ) 
};

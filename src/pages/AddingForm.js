import React, {useRef} from "react";
import { Form, Input,  Button} from "antd";

import { MailOutlined , PhoneOutlined, UserOutlined} from '@ant-design/icons';
import { useFetch } from "../utils/hook";


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };



export default ({...props}) =>{
   
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const countryRef = useRef(null);
    const phoneNumberRef = useRef(null);

   
    async function fetchUrl(url, data) {
        
        const response = await fetch(url,
            {
                 method: "post",
                 headers: {"Content-Type": "application/JSON"},
                 body: JSON.stringify(data)
            });
            nameRef.current.input.value="";
            emailRef.current.input.value="";
            addressRef.current.input.value="";
            countryRef.current.input.value="";
            phoneNumberRef.current.input.value="";

            
    }
   
    const submitHandler = (e) => {
        e.preventDefault();
     
     
        const data={
            name:nameRef.current.input.value, 
            email:emailRef.current.input.value,
            phoneNumber:phoneNumberRef.current.input.value,
            address:addressRef.current.input.value, 
            country:countryRef.current.input.value
        }

        
        fetchUrl(process.env.REACT_APP_NOT_ADDING_NEW_PARTNER_URI, data)
    
    }

 
    
    return(
        <>
        <Form   >
        <FormItem
            {...formItemLayout}
            label="Partener Name"
            hasFeedback
            >
                <Input
                    
                    ref={nameRef}
                    placeholder="Enter your userName"
                    prefix={<UserOutlined style={{ fontSize: '16px', color: '#08c' }}  />}
                />
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="E-mail"
                hasFeedback
                >
                <Input
                    ref={emailRef}
                    placeholder="Email"
                    prefix={<MailOutlined style={{ fontSize: '16px', color: '#08c' }} />}
                />
            </FormItem>
            
            <FormItem
            {...formItemLayout}
            label="Phone number"
            hasFeedback
            >
                <Input
                    ref={phoneNumberRef}
                    placeholder="Phone number"
                    prefix={<PhoneOutlined style={{ fontSize: '16px', color: '#08c' }}  />}
                />
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Address"
            hasFeedback
            >
                <Input
                    placeholder="Address"
                    ref={addressRef}
                />
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Country"
            hasFeedback
            >
                <Input
                    ref={countryRef}
                    placeholder="Country of origin"
                />
            </FormItem>

            <Button 
                type="primary" 
                htmlType="submit"
                onClick={(e)=> submitHandler(e)}
            >
                    Add new Partner
            </Button>
            

        </Form>
        </>
    )
}
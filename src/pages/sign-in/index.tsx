import { auth } from "@service";
import LoginImage from "../../assets/login-bg.svg";
import { Button, Input, Form, message } from "antd";
import { useState } from "react";
import { saveToken } from "@token-service";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";

const Index = () => {
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const save = async () => {
    const payload = { phone_number, password };
    try {
      const response:any = await auth.sign_in(payload);
      if (response?.status === 201) {
        saveToken("access_token", response?.data?.data?.tokens.access_token);
        navigate("/main")
        message.success(response?.data?.error?.message || "Login sucessfully");
      } else {
        message.error(response?.data?.error?.message || "Login failed");
      }
    } catch (error) {
     message.error("Failed")
    }
  };



  return (
    <Row gutter={[16, 16]} align="middle" style={{ height: "100vh" }}>
      
            <Col span={12} >
                <img src={LoginImage} alt="Registration" style={{ width: "100%", height: "70vh" }} />
            </Col>
            <Col span={6} offset={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h1>Login</h1>
                <Form
                    name="login_form"
                    layout="vertical"
                    onFinish={save}
                >
                    <Form.Item
                        label="Phone number"
                        name="phone_number"
                        rules={[{ required: true, message: 'Please enter your phone number!' }]}
                    >
                        <Input 
                            type="text" 
                            onChange={(e) => setPhone(e.target.value)} 
                            style={{ paddingTop: '12px', paddingBottom: '12px' }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                      
                        <Input.Password 
                            onChange={(e) => setPassword(e.target.value)} 
                            style={{ paddingTop: '12px', paddingBottom: '12px' }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                
                <p>
                    Don’t you have an account?{" "}
                    <Link to="/sign-up" style={{ color: 'blue', fontWeight: 'bold' }}>
                        Register
                    </Link>
                </p>
            </Col>
        </Row>
  );
};

export default Index;


import LoginImage from "../../assets/login-bg.svg";
import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/token-service";
import { auth } from "@service"; 

const Index = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createData = async (data: any) => {
    try {
      const response = await auth.sign_up(data);
      return response;
    } catch (error: any) {
    }
  };

  const handleSubmit = async (value: any) => {
    setLoading(true);
    const response:any = await createData(value);
    if (response?.status === 201) {
      navigate("/");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (getToken("access_token")) {
      // navigate("/main");
    }
  }, [navigate]);

  return (
    <div className="w-[100%] h-[100vh] flex">
      <div className="w-[50%] bg-[#1677ff10] flex items-center justify-center">
        <img src={LoginImage} alt="bg" />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div>
          <h1 className="text-[35px] font-semibold mb-4">Registrate</h1>
          <Form
            name="basic"
            style={{ width: "400px" }}
            onFinish={handleSubmit}
            layout="vertical"
          >
            <Form.Item
              label="First name"
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phone_number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ type: "email", required: true }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: "100%", marginTop: "10px" }}
                size="large"
                type="primary"
                htmlType="submit"
                loading={loading}
                iconPosition="end"
              >
                Sign Up
              </Button>
              <div className="flex mt-2 items-center gap-2">
                <p className="text-[16px]">Already have an account?</p>
                <p
                  onClick={() => navigate("/")}
                  className="cursor-pointer text-[16px] hover:text-blue font-semibold duration-150"
                >
                  Login
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;
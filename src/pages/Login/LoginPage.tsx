import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginHandler } from "../../api/Calls";
import { UserContext } from "../../context/AuthenticationProvider";
import { LoadingContext } from "../../context/LoadingProvider";
import { User } from "../../models/User";

const LoginPage = () => {
  const { Title } = Typography;

  let navigate = useNavigate();

  // CONTEXT
  const { setLoading } = React.useContext(LoadingContext);
  const { login, user } = React.useContext(UserContext);

  React.useEffect(() => {
    if (user && user.isLoggedIn) {
      navigate("/");
    }
  }, [user, navigate]);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Received values of form: ", values);

    LoginHandler(values.username, values.password)
      .then((res: any) => {
        toast.success("Login effettuato con successo!");
        // TODO: Setup the user context
        const user: User = {
          id: res.id,
          first_name: res.first_name,
          last_name: res.last_name,
          email: res.email,
          username: res.username,
          token: res.token,
          isLoggedIn: true,
        };
        login(user);
        setLoading(false);
        navigate("/");
      })
      .catch((err: any) => {
        setLoading(false);
        if (err.response.status === 404) {
          toast.error("Invalid username or password");
        }
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  return (
    <div style={{ margin: "4rem" }}>
      <Row gutter={[24, 0]} align="middle" justify="center">
        <Col>
          <Title level={2}>Log In</Title>
        </Col>
      </Row>
      <Row gutter={[24, 0]} align="middle" justify="center">
        <Col>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;

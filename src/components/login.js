import { Typography, Button, Input, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Title } = Typography;

function Login() {
  return (
    <content className="content">
      <div className="login">
        <div className="loginTitle">
          <Typography>
            <Title level={2}>Đăng nhập</Title>
          </Typography>
        </div>

        <Row className="gridRow">
          <Col span={6}>
            <Typography>
              <Title level={4}>User Name</Title>
            </Typography>
          </Col>
          <Col span={18}>
            <Input size="large" prefix={<UserOutlined />} />
          </Col>
        </Row>

        <Row className="gridRow">
          <Col span={6}>
            <Typography>
              <Title level={4}>Password</Title>
            </Typography>
          </Col>
          <Col span={18}>
            <Input type="password" size="large" prefix={<LockOutlined />} />
          </Col>
        </Row>

        <Button className="buttonStyle" type="primary">
          Log in
        </Button>

        <Space>
          <Link to="/forgot">Forgot password?</Link>
        </Space>
      </div>
    </content>
  );
}

export default Login;

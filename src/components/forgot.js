import { Typography, Button, Input, Row, Col, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Title } = Typography;

export default function Forgot() {
  return (
    <content className="content">
      <div className="login">
        <div className="loginTitle">
          <Typography>
            <Title level={3}>Quên mật khẩu?</Title>
          </Typography>
        </div>

        <Row className="gridRow">
          <Col span={24}>
            <Typography>
              <Title level={4}>Your Recover Email</Title>
            </Typography>
          </Col>
          <Col span={24}>
            <Input type="email" size="large" prefix={<UserOutlined />} />
          </Col>
        </Row>

        <Button className="buttonStyle" type="primary">
          Submit
        </Button>

        <Space>
          <Link to="/">Back to home</Link>
        </Space>
      </div>
    </content>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Typography } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import "./App.css";
const { Title } = Typography;

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="header">
        <div className="navbar">
          <CheckSquareOutlined className="iconChecked" />
          <Typography className="titleContainer">
            <Title className="title" level={3}>
              Building Management
            </Title>
          </Typography>
        </div>
      </div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

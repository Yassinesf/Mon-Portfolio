import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaMicrosoft,
  FaNetworkWired,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman, SiXcode, SiMysql } from "react-icons/si";

const tools = [
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaMicrosoft />, label: "Visual Studio" },
  { icon: <DiVisualstudio />, label: "VS Code" },
  { icon: <SiMysql />, label: "SQL Server" },
  { icon: <SiXcode />, label: "Xcode" },
  { icon: <FaNetworkWired />, label: "Cisco Packet Tracer" },
  { icon: <SiPostman />, label: "Postman" },
];

function Toolstack() {
  return (
    <Row className="toolstack-row">
      {tools.map((tool, idx) => (
        <Col key={idx} xs={12} md={5} className="tool-box">
          <span className="tool-icon">{tool.icon}</span>
          <span className="tool-label">{tool.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

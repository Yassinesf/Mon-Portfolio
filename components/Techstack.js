// ✅ FILE: components/Techstack.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import { DiJavascript1, DiJava } from "react-icons/di";
import { SiKotlin, SiCplusplus, SiPython, SiMysql } from "react-icons/si";

const languages = [
  { icon: <DiJavascript1 />, label: "JavaScript" },
  { icon: <SiKotlin />, label: "Kotlin" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <DiJava />, label: "Java" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiMysql />, label: "SQL" },
];

function Techstack() {
  return (
    <Row className="toolstack-row">
      {languages.map((lang, idx) => (
        <Col key={idx} xs={12} md={5} className="tool-box">
          <span className="tool-icon">{lang.icon}</span>
          <span className="tool-label">{lang.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

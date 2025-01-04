import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaLinux } from "react-icons/fa6";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
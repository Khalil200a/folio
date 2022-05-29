import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiWebstorm,
    SiIntellijidea,
    SiPhpstorm,
    SiPycharm,
    SiGithub,
    SiJira,
    SiClickup,
    SiClion,
    SiXampp,
    SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWebstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhpstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPycharm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiClickup />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiClion />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiXampp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
        </Col>

    </Row>
  );
}

export default Toolstack;

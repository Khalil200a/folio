import React from "react";
import { Col, Row } from "react-bootstrap";
import {CgCap, CgCPlusPlus} from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiPython,
    DiGit, DiAngularSimple, DiMysql, DiJava, DiSqllite, DiPhp,
} from "react-icons/di";
import {
    SiFirebase,SiLaravel, SiSpring, SiDotnet, SiDjango, SiFlask, SiDocker, SiCplusplus, SiC,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpring />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDotnet />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlask />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDocker/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiSqllite />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khalil Jemghili </span>
            from <span className="purple"> Fes, Morocco.</span>
            <br />I am an engineering student at Mohammadia School of engineers .
            <br />
            <br />
            In My two years at this school, I learned a lot of things such as AI,
            IT, Data Science and also Web and mobile Development.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

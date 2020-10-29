import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import me from "../assets/me-camera.JPG";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col lg="4">
            <img
              src={me}
              alt="me"
              style={{ width: "70%", borderRadius: "3px" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center p-3">
            <h4>About</h4>
            <p>
              I started taking photos with a film camera in high school. Once I
              graduated from high school, I lost access to the darkroom but I
              continued shooting film. Eventually I was living in my own
              apartment with an insanely large closet and that was when my dream
              of having my own darkroom became a reality. My darkroom has moved
              with me to every new apartment/house from that point on. I
              eventually started hanging my work at local coffee shops in
              Indianapolis and even had a show at an art center. I continue to
              travel with my camera and stop randomly on the side of the road to
              take pictures.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;

import React from "react";
import { Zoom } from "react-slideshow-image";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import { s2, s3, s4, s5 } from "../../assets/index.js";
import Logo from "../../assets/logo.png";
const images = [s2, s3, s4, s5];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.5,
  arrows: true,
  autoplay: true,
};

const Slideshow = () => {
  return (
    <Row style={{ margin: "0px", padding: "0px" }}>
      <Col md="2" id="col"></Col>

      <Col md="8" id="col" className={classes.bod}>
        <Row>
          <Col md="2" className={classes.logo}>
            <Row>
              <center>
                {" "}
                <img src={Logo} />
              </center>
            </Row>
            <Row>
              <center>
                <h3></h3>
              </center>
            </Row>
          </Col>
          <Col md="10">
            <Row>
              <div className={classes.title}>
                <h1> Барилгын зураг</h1>
              </div>
            </Row>
            <Row>
              <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                  <img
                    key={index}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "420px",
                    }}
                    src={each}
                  />
                ))}
              </Zoom>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col md="2" id="col"></Col>
    </Row>
  );
};
export default Slideshow;

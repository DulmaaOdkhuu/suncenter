import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Handiv = () => {
  return (
    <div className={classes.A}>
      <Row style={{ margin: "0px", padding: "0px" }}>
        <Col md="2" id="col" className={classes.hide}></Col>
        <Col md="8" id="col" className={classes.bod}>
          <Row>
            <Col md="2" className={classes.logo}>
              <Row>
                <center>
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
                <div
                  style={{ color: "#f15336", fontStyle: "Italic" }}
                  className={classes.title}
                >
                  <h1> Хандивын данс</h1>
                </div>
              </Row>
              <Row>
                <div
                  style={{
                    fontSize: "18px",
                    color: "#f15336",
                    fontStyle: "Italic",
                  }}
                  className={classes.text}
                >
                  Хэрэв та энэхүү төслийг дэмжихийг хүсвэл Удирдах Зөвлөлийн
                  тэргүүн А.Даваажаргалтай холбогдоорой.
                  <br />
                  Утас: 80368308
                  <br />
                  Бид олон нийтэд нээлттэй хандивын дансыг үйл ажиллагаа
                  жигдрэхээр тавих болно.
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="2" id="col" className={classes.hide}></Col>
      </Row>
    </div>
  );
};
export default Handiv;

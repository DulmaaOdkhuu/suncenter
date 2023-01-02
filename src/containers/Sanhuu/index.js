import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Sanhuu = () => {
  return (
    <div className={classes.A}>
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
                  <h1> Нар Төвийн санхүүжилт</h1>
                </div>
              </Row>
              <Row>
                <div className={classes.text}>
                  Нар Төвийн санхүүжилт нь хувь хүн, албан байгууллага, төрийн
                  болон төрийн бус байгууллагаас бүрдэх бөгөөд олон нийтэд
                  нээлттэй, ил тод, шилэн явагдана.
                </div>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md="2" id="col"></Col>
      </Row>
    </div>
  );
};
export default Sanhuu;

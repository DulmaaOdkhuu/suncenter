import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Ab = () => {
  return (
    <div className={classes.A}>
      <Row style={{ margin: "0px", padding: "0px" }}>
        <Col md="2" id="col"></Col>
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
                <div className={classes.title}>
                  <h1>Ашгийн бус</h1>
                </div>
              </Row>
              <Row>
                <div className={classes.text}>
                  Нар Төв нь аймаг болон дүүргийн захаар байрлах иргэдийн
                  хөгжил, амьдралд нь хувь нэмэр болох үүднээс ашгийн бусаар үйл
                  ажиллагаагаа явуулах болно. Үйл ажиллагааны урсгал зардал
                  болон тус дүүргийн нар төвд ажиллах ажилчидын цалинг гаргах
                  хэмжээнд үйлчлүүлж буй иргэдэд санал болгон сайн дурын үндсэн
                  дээр үйлчилгээний тариф тавьж ажиллана.
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
export default Ab;

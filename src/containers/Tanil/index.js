import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Tanil = () => {
  return (
    <div className={classes.A}>
      <Row style={{ margin: "0px", padding: "0px" }}>
        <Col md="2" id="col" className={classes.hide}></Col>
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
                  <h1>Хамрах хүрээ</h1>
                </div>
              </Row>

              <Row>
                <div className={classes.text}>
                  Улаанбаатар хотын 9 дүүргийн гэр хороололтой хэсгүүд болон 21
                  аймагт эхний ээлжинд НАР ТӨВ-г байгуулах бөгөөд цаашид 330
                  сумдад жижгэрүүлсэн хэлбэрээр байгуулах төлөвлөгөөтэй байна.
                  Хэрэв та өөрийн оршин суугаа дүүрэг, орон нутагт тус төвийг
                  бариулах хүсэлтэй бол манай вэбсайтын бүртгүүлэх хэсэгт
                  мэдээллээ оруулна уу. Хамгийн их санал авсан байршилд бид
                  эхний хандивын хөрөнгөөр Нар Төвийг барих болно.
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
export default Tanil;

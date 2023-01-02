import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Hamrah = () => {
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
                  <h1>Нар Төвийн Бүтэц</h1>
                </div>
              </Row>

              <Row>
                <div className={classes.text}>
                  НАР ТӨВ нь иргэдийг соён гэгээрүүлэх, боловсрол, эрүүл мэндийг
                  дэмжихэд чиглэсэн үндсэн 9 бүрэлдэхүүнтэй:
                  <br />
                  <br />
                  1. Номын Сан
                  <br />
                  2. 260 хүний багтаамжтай кино театр /Хурлын танхим/
                  <br />
                  3. Ур чадвар эзэмшүүлэх сургалтын танхим
                  <br />
                  4. Сагс болон Волейболын заал
                  <br />
                  5. Фитнес танхим
                  <br />
                  6. Халуун ус, саун
                  <br />
                  7. Хувцас угаалгын газар
                  <br />
                  8. Нархан Цэцэрлэг, хүүхдийн тоглоомын төв
                  <br />
                  9. Нийтэд үйлчлэх хэсэг
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
export default Hamrah;

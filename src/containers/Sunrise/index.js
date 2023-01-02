import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Sunrise = () => {
  return (
    <div>
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
            <Col></Col>
            <Col md="10">
              <Row>
                <div className={classes.title}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontStyle: "Underline",
                      textAlign: "left",
                    }}
                  >
                    "SUNRISE" фестиваль нь залуучуудын соёлын наадам бөгөөд жил
                    бүр 10.000 - 20.000 залуус оролцдог Монголын томоохон арга
                    хэмжээ юм. SUNRISE FESTIVAL-с олсон цэвэр ашгийн 50% хувийг
                    бид НАР ТӨВД хандивлана.
                    <br />
                    SUNRISE FESTIVAL 2022: 8 сарын 19 нд Төв Цэнгэлдэх Хүрээлэнд
                    зохион байгуулагдана.
                  </div>
                </div>
              </Row>
              <Row>
                <iframe
                  className={classes.video}
                  width="700px"
                  height="420px"
                  src="https://www.youtube.com/embed/Sef-Q4Hwxhc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="2" id="col" className={classes.hide}></Col>
      </Row>
    </div>
  );
};
export default Sunrise;

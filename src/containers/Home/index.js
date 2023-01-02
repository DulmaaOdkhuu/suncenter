import React from "react";
import { Row, Col } from "reactstrap";
import classes from "../index.css";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div>
      <Row>
        <Col md="2" id="col"></Col>
        <Col md="8" id="col" className={classes.bod}>
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
                <h1> НАР ТӨВ</h1>
              </div>
            </Row>
            <Row>
              <div className={classes.text}>
                НАР ТӨВ нь гишүүнчлэл бүхий, хувь хүнийг хөгжүүлэхэд чиглэсэн
                олон нийтийн төв юм.
                <br />
                <br />
                Бидний алсын хараа:
                <br />
                Монголын үнэт зүйл болох гэр бүл, хувь хүнийг хөгжүүлж, хойч
                үедээ гэрэлт ирээдүйг бүтээхэд оршино.
                <br />
                <br />
                Зорилго:
                <br />
                Хувь хүнийг соён гэгээрүүлж, ухамсарыг төлөвшүүлэн чадавхижуулах
                замаар цагийг боловсон өнгөрүүлэх, эрүүл амьдралын хэв маяг, зөв
                хандлагыг хэвшүүлнэ. Боловсрол эзэмшилтийг дэмжиж, архигүй
                тамхигүй орчныг бий болгон хүчирхийллийг багасгах, гэр бүлийн
                хөгжлийг дэмжих, залуусыг зорилгодоо хүрэх замд нь хөтлөх,
                хүүхдэд ээлтэй орчныг бүрдүүлэхэд зорьж ажиллана.
                <br />
                <br />
                Зорилт:
                <br />
                Энэхүү зорилгодоо хүрэхийн тулд бид НАР ТӨВИЙГ Улаанбаатар хотын
                9 дүүрэг болон 21 аймагт тус тус барина.
                <br />
                <br />
                Бидний Уриа:
                <br />
                Ирээдүйн Төлөө.
              </div>
            </Row>
          </Col>
        </Col>
        <Col md="2" id="col"></Col>
      </Row>
    </div>
  );
};
export default Home;

import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import classes from "./index.css";
import { Field, formInputData, formValidation } from "reactjs-input-validator";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      category: (
        <select name="Хот/Aймаг" onChange={this.test}>
          <option value="Багануур">Багануур</option>
          <option value="Багахангай">Багахангай</option>
          <option value="Баянгол">Баянгол</option>
          <option value="Баянзүрх">Баянзүрх</option>
          <option value="Налайх">Налайх</option>
          <option value="Сонгинохайрхан">Сонгинохайрхан</option>
          <option value="Сүхбаатар">Сүхбаатар</option>
          <option value="Хан-Уул">Хан-Уул</option>
          <option value="Чингэлтэй">Чингэлтэй</option>
        </select>
      ),
      aimag: "Багануур",
      city: "Ulaanbaatar",
      adress: "Байхгүй",
      gender: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, inputValue, inputName, validationState, isRequired) {
    const value = (event && event.target.value) || inputValue;
    const { data } = this.state;
    data[inputName] = { value, validation: validationState, isRequired };
    this.setState({
      data,
    });
    // if you want access to your form data
    const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    // tells you if the entire form validation is true or false
    const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
  }

  handleSubmit(e) {
    e.preventDefault();
    const isFormValid = formValidation(this.state.data);
    if (isFormValid) {
      this.setState({ callAPI: true });

      const data = this.state.data;

      axios
        .post("http://www.suncenter.mn:3050/info/register", {
          first_name: data.firstName.value,
          last_name: data.lastName.value,
          birthdate: data.date.value,
          gender: this.state.gender,
          email: data.email.value,
          phone_number: data.phone.value,
          city: this.state.city,
          province_district: this.state.aimag,
          address: this.state.adress,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      alert("Амжилтаа бүртгэгдлээ");
    } else {
      this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
      alert("Алдаа гарсан тул дахин оролдоно уу ?");
    }
  }
  test = (e) => {
    this.setState({ aimag: e.target.value });
  };
  gender = (e) => {
    this.setState({ gender: e.target.value });
  };
  textArea = (e) => {
    this.setState({ adress: e.target.value });
  };
  ange = (e) => {
    this.setState({ city: e.target.value });
    if (e.target.value == "Aimag") {
      this.setState({
        category: (
          <select name="Хот/Aймаг" onChange={this.test}>
            <option value="Архангай">Архангай</option>
            <option value="Баян-Өлгий">Баян-Өлгий</option>
            <option value="Баянхонгор">Баянхонгор</option>
            <option value="Булган">Булган</option>
            <option value="Говь-Алтай">Говь-Алтай</option>
            <option value="Говьсүмбэр">Говьсүмбэр</option>
            <option value="Дархан-Уул">Дархан-Уул</option>
            <option value="Дорноговь">Дорноговь</option>
            <option value="Дорнод">Дорнод</option>
            <option value="Дундговь">Дундговь</option>
            <option value="Завхан">Завхан</option>
            <option value="Орхон">Орхон</option>
            <option value="Өвөрхангай">Өвөрхангай</option>
            <option value="Өмнөговь">Өмнөговь</option>
            <option value="Сүхбаатар">Сүхбаатар</option>
            <option value="Сэлэнгэ">Сэлэнгэ</option>
            <option value="Төв">Төв</option>
            <option value="Увс">Увс</option>
            <option value="Ховд">Ховд</option>
            <option value="Хөвсгөл">Хөвсгөл</option>
            <option value="Хэнтий">Хэнтий</option>
          </select>
        ),
      });
      return (e.target.value = "Aimag");
    }

    if (e.target.value == "Ulaanbaatar") {
      this.setState({
        category: (
          <select name="Хот/Aймаг" onChange={this.test}>
            <option value="Багануур">Багануур</option>
            <option value="Багахангай">Багахангай</option>
            <option value="Баянгол">Баянгол</option>
            <option value="Баянзүрх">Баянзүрх</option>
            <option value="Налайх">Налайх</option>
            <option value="Сонгинохайрхан">Сонгинохайрхан</option>
            <option value="Сүхбаатар">Сүхбаатар</option>
            <option value="Хан-Уул">Хан-Уул</option>
            <option value="Чингэлтэй">Чингэлтэй</option>
          </select>
        ),
      });
      return (e.target.value = "Ulaanbaatar");
    }
  };

  render() {
    console.log(this.state);
    return (
      <Row
        style={{ margin: "0px", padding: "0px" }}
        className={classes.background}
      >
        <Col md="2" id="col" className={classes.hide}></Col>
        <Col md="8">
          <Row>
            <div className={classes.header}>
              <p> Шинэ хэрэглэгчийн бүртгэл </p>
            </div>
          </Row>
          <div className={classes.container}>
            <Row>
              <Col md="2" id="col"></Col>
              <Col md="7" id="col" className={classes.body}>
                <Row>
                  <h3>Дэмжигчийн мэдээлэл:</h3>
                  <br />
                  <div style={{ borderBottom: "1px solid gray" }}></div>
                </Row>
                <br />
                <div className={classes.text}>
                  <div style={{ fontStyle: "Italic", fontSize: "18px" }}>
                    Хамгийн их санал авсан байршилд бид эхний хандивын хөрөнгөөр
                    Нар Төвийг барих болно.
                  </div>
                </div>
                <Row className={classes.reg}>
                  <Col md="3" id="col">
                    <center>
                      <Field
                        required
                        requiredErrMsg="Овогоо оруулна уу!"
                        label="Овог"
                        name="firstName"
                        placeholder="Овог"
                        minLength={2}
                        minLengthErrMsg="2 аас их үг оруулна"
                        isString={2}
                        onChange={this.handleChange}
                        value={this.state.data.firstName}
                        shouldValidateInputs={this.state.shouldValidateInputs}
                      />
                    </center>
                  </Col>
                  <Col md="2" id="col" className={classes.hide}></Col>
                  <Col md="3" id="col">
                    <center>
                      <Field
                        required
                        requiredErrMsg="Нэрээ оруулна уу!"
                        label="Нэр"
                        name="lastName"
                        placeholder="Нэр"
                        minLength={2}
                        minLengthErrMsg="2 аас их үг оруулна"
                        onChange={this.handleChange}
                        value={this.state.data.lastName}
                        shouldValidateInputs={this.state.shouldValidateInputs}
                      />
                    </center>
                  </Col>
                  <Col md="4" id="col" className={classes.hide}></Col>
                </Row>
                <Row className={classes.reg}>
                  <Col md="4" id="col">
                    <center>
                      <Field
                        required
                        requiredErrMsg="Төрсөн өдөрөө оруулна уу!"
                        label="Төрсөн Он/Сар/Өдөр"
                        name="date"
                        placeholder="date"
                        onChange={this.handleChange}
                        type="date"
                        value={this.state.data.date}
                        shouldValidateInputs={this.state.shouldValidateInputs}
                        validatorErrMsg
                        style={{ fontSize: "12px" }}
                      />
                    </center>
                  </Col>
                  <Col md="1" id="col" className={classes.hide}></Col>
                  <Col md="3" id="col">
                    <label>Хүйс *</label>
                    <br />
                    <center>
                      <div className={classes.inputsex}>
                        <input
                          type="radio"
                          name="gender"
                          onChange={this.gender}
                          value={true}
                          style={{ width: "25px" }}
                        />
                        <div className={classes.radiolabel}>Эр</div>
                        <input
                          type="radio"
                          name="gender"
                          onChange={this.gender}
                          value={false}
                          style={{ width: "25px" }}
                        />
                        <div className={classes.radiolabel}>Эм</div>
                      </div>
                    </center>
                  </Col>
                  <Col md="4" id="col" className={classes.hide}></Col>
                </Row>
                <Row className={classes.reg}>
                  <Col md="3" id="col">
                    <center>
                      <Field
                        // required
                        // requiredErrMsg="И-мэйл хаягаа оруулна уу!"
                        validator="isEmail"
                        validatorErrMsg="И-мэйл хаяг биш байна!"
                        label="И-мэйл *"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.data.email}
                        shouldValidateInputs={this.state.shouldValidateInputs}
                      />
                    </center>
                  </Col>
                  <Col md="2" id="col" className={classes.hide}></Col>
                  <Col md="3" id="col">
                    <center>
                      <Field
                        required
                        requiredErrMsg="Утасны дугаараа оруулна уу!"
                        validator="isInt"
                        validatorErrMsg="Утасаа оруулна уу!"
                        label="Утас *"
                        name="phone"
                        placeholder="Утас"
                        minLength={8}
                        minLengthErrMsg="Утасаа оруулна уу!"
                        maxLength={8}
                        onChange={this.handleChange}
                        value={this.state.data.phone}
                        shouldValidateInputs={this.state.shouldValidateInputs}
                      />
                    </center>
                  </Col>
                  <Col md="4" id="col" className={classes.hide}></Col>
                </Row>

                <Row className={classes.reg}>
                  <Col md="12" id="col">
                    <label style={{ paddingLeft: "30px" }}>
                      Таны оршин суугаа Дүүрэг/Аймаг*
                    </label>
                    <Row>
                      <Col md="3" id="col" className>
                        <select onChange={this.ange}>
                          <option value="Ulaanbaatar">Улаанбаатар</option>
                          <option value="Aimag">Аймаг</option>
                        </select>
                      </Col>
                      <Col md="2" id="col" className={classes.hide}></Col>
                      <Col md="3" id="col">
                        {this.state.category}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                {/* <Row>
                  <Col md="6" id="col">
                    <label>Дэлгэрэнгүй хаяг</label>
                    <br />
                    <fieldset>
                      <textarea
                        onChange={this.textArea}
                        refs="message"
                        cols="60"
                        rows="5"
                        className="comments"
                        placeholder="Message"
                      />
                    </fieldset>
                  </Col>
                </Row> */}
                <br />
                <div className={classes.submit}>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className={classes.btnsubmit}
                  >
                    Бүртгүүлэх
                  </button>
                </div>
                {/* {this.state.callAPI ? (
                  <pre className="resultBlock">
                    {JSON.stringify(formInputData(this.state.data), null, 4)}
                  </pre>
                ) : null} */}
              </Col>
            </Row>
          </div>
        </Col>
        <Col md="4" id="col" className={classes.hide}></Col>
      </Row>
    );
  }
}

export default Register;

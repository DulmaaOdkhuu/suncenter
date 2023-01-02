import React, { Component } from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { FiArrowUpRight } from "react-icons/fi";

class navigationItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      isLoaded: false,
    };
  }

  render() {
    return (
      <div className={classes.NavigationItems}>
        <div className={classes.sun}>
          <NavigationItem link="/" exact>
            НАР ТӨВ
          </NavigationItem>
        </div>
        <NavigationItem link="/hamrah" active="active">
          Танилцуулга
        </NavigationItem>
        <NavigationItem link="/sanhuu" active="active">
          Санхүүжилт
        </NavigationItem>
        <NavigationItem link="/ab" active="active">
          Ашгийн бус{" "}
        </NavigationItem>
        <NavigationItem link="/tanil" active="active">
          Хамрах хүрээ{" "}
        </NavigationItem>
        <NavigationItem link="/slide" active="active">
          Барилга{" "}
        </NavigationItem>
        <NavigationItem link="/register" active="active">
          Бүртгүүлэх{" "}
        </NavigationItem>
        <NavigationItem link="/contact" active="active">
          Холбоо барих{" "}
        </NavigationItem>
        <NavigationItem link="/sunrise">SUNRISE 2022</NavigationItem>
        <div className={classes.handiv}>
          <NavigationItem link="/handiv">
            <div className={classes.button}>
              Хандив
              <FiArrowUpRight />
            </div>
          </NavigationItem>
        </div>
      </div>
    );
  }
}
export default navigationItems;

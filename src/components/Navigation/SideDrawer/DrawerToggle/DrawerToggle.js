import React from "react";

import classes from "./DrawerToggle.css";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div style={{ marginTop: "3px" }}></div>
    <div style={{ marginTop: "3px" }}></div>
  </div>
);

export default drawerToggle;

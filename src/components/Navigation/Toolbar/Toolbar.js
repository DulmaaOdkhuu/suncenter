import React from "react";
import Container from "reactstrap/lib/Container";
import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Container className={classes.container}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </Container>
  </header>
);

export default toolbar;

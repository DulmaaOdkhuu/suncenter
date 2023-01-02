import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { Row, Col } from "reactstrap";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div className={classes.body}>
          <Col md="12" id="col">
            <Row className={classes.head}>
              <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
              <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
              />
            </Row>
            <Row>
              <main className={classes.Content}>{this.props.children}</main>
            </Row>
          </Col>
        </div>
      </Aux>
    );
  }
}

export default Layout;

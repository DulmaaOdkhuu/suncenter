import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Register from "./containers/Register/index";
import Body from "./containers/Body/index";
import Contact from "./containers/Contact/index";
import Sanhuu from "./containers/Sanhuu/index";
import Ab from "./containers/Ab";
import Tanil from "./containers/Tanil";
import Slideshow from "./containers/Slide";
import Hamrah from "./containers/Hamrah";
import Handiv from "./containers/Handiv";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/slide" component={Slideshow} />
        <Route path="/tanil" component={Tanil} />
        <Route path="/ab" component={Ab} />
        <Route path="/sanhuu" component={Sanhuu} />
        <Route path="/contact" component={Contact} />
        <Route path="/hamrah" component={Hamrah} />
        <Route path="/register" component={Register} />
        <Route path="/handiv" component={Handiv} />
        <Route path="/" exact component={Body} />
        <Redirect to="/" />
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}
export default App;

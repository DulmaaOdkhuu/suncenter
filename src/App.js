import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Register from "./containers/Register/index";
import Home from "./containers/Home/index";
import Hamrah from "./containers/Hamrah/index";
import Contact from "./containers/Contact/index";
import Sanhuu from "./containers/Sanhuu/index";
import Ab from "./containers/Ab";
import Tanil from "./containers/Tanil";
import Slideshow from "./containers/Slide";
import Sunrise from "./containers/Sunrise";
import Handiv from "./containers/Handiv";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hamrah" component={Hamrah} />
        <Route path="/slide" component={Slideshow} />
        <Route path="/tanil" component={Tanil} />
        <Route path="/ab" component={Ab} />
        <Route path="/sanhuu" component={Sanhuu} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/sunrise" exact component={Sunrise} />
        <Route path="/handiv" exact component={Handiv} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
export default App;

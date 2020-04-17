import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import App from "./App";
import "./App.css";
import Contribute from "./components/Contribute";
import Training from "./components/Training";
import Text from "./components/Text";
import Chapter from "./components/Chapter";
import Github from "./components/Github";
import Blog from "./components/Blog";
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <SideBar dissapear="side-bar" />
        <Switch>
          <Route path="/" exact component={(props) => <App />} />
          <Route path="/search" component={(props) => <Search />} />
          <Route path="/contribute" component={(props) => <Contribute />} />
          <Route path="/training" component={(props) => <Training />} />

          <Route path="/text/:text" component={Text} />
          <Route path="/chapters/:chap" component={Chapter} />
          <Route path="/github" component={(props) => <Github />} />
          <Route path="/blog" component={(props) => <Blog />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

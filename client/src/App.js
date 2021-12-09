import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Registration from "./components/Registration";
import Errorpage from "./components/Errorpage";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route>
          <Errorpage />
        </Route>
      </Switch>
    </>
  );
};

export default App;

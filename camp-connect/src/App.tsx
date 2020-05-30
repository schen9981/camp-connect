import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";
import About from "./pages/About/About";
import Enroll from "./pages/Enroll/Enroll";
import Inclusivity from "./pages/Inclusivity/Inclusivity";

type AppProps = {};

type AppState = {};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={"/about"} component={About}></Route>
          {/* <Route exact path={"/schedule"} component={Schedule}></Route> */}
          <Route exact path={"/inclusivity"} component={Inclusivity}></Route>
          <Route exact path={"/enroll"} component={Enroll}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

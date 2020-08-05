import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navegation from "./pages/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/navigation`} exact component={Navegation} />
          <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

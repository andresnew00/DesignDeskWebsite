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
          <Route path="/navigation" exact component={Navegation} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

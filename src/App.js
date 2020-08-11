import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navegation from "./pages/Navigation";
import Contact from "./pages/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    exact
                    component={Home}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/navigation`}
                    exact
                    component={Navegation}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/about`}
                    component={About}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/contact`}
                    component={Contact}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
}

export default App;

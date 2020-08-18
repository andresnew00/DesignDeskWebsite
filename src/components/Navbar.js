import React from "react";
import { ReactComponent as Logo } from "../assets/logodd.svg";
import { ReactComponent as Burger } from "../assets/open-menu.svg";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navbar(props) {
  const CurrentlocationInNavbar = props.location;

  // console.log(Currentlocation);
  return (
    <header>
      <div className="navbar-wrapper">
        <div className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Logo />
          </Link>
        </div>
        <div className="phoneNburger">
          <div className="phoneNumber">+1 (678) 338-6427</div>

          <div className="burgerMenu">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Link
                      to={{
                        pathname: `${process.env.PUBLIC_URL}/navigation`,
                        Currentlocation: { CurrentlocationInNavbar },
                      }}
                    >
                      <Burger />
                    </Link>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

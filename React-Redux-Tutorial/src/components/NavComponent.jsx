import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import NewsComponent from "./NewsComponent";
import ListUser from "./Users/ListUser";
import DetailUser from './Users/DetailUser'
class NavComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName="active-link">News</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link">About</NavLink>
              </li>
              
              <li>
                <NavLink to="/user" activeClassName="active-link">Users</NavLink>
              </li>
             
            </ul>
          </nav>
          <Switch>
            <Route path="/news">
              <NewsComponent />
            </Route>
            <Route path="/contact">
              <ContactComponent />
            </Route>
            <Route path="/about">
              <AboutComponent />
            </Route>
            <Route exact path="/user">
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default NavComponent;

import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "tachyons";
class Navigation extends Component {
  onLogin() {
    this.props.onLogin();
  }
  onLogout() {
    this.props.onLogout();
  }

  render() {
    let line;
    if (this.props.idToken === "") {
      line = (
        <NavItem onClick={this.onLogin.bind(this)} ref="#">
          Login
        </NavItem>
      );
    } else {
      line = (
        <NavItem onClick={this.onLogout.bind(this)} ref="#">
          Logout
        </NavItem>
      );
    }
    return (
      <Navbar className="bg-light-silver bb b--light-blue">
        <Navbar.Header>
          <Navbar.Brand>Github Searcher</Navbar.Brand>
        </Navbar.Header>
        <Nav>{line}</Nav>
      </Navbar>
    );
  }
}

export default Navigation;

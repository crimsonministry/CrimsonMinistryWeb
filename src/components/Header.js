/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#231F20'}} dark expand="md">
          <NavbarBrand href="/">Crimson Ministry</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="about">
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="docs">
                <NavLink>Docs</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="team">
                <NavLink>Team</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;

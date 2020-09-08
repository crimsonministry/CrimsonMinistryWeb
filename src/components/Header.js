/** @format */

import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Crimson Ministry</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="deliverables">
                <NavLink>Deliverables</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="bio">
                <NavLink>Developers</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;

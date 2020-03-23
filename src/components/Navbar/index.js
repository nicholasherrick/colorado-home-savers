import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Jeffrey Herrick</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Sellers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Buyers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">In Foreclosure?</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Timeline</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Bio</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavbarNav right> */}
          {/* </MDBNavbarNav> */}
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;
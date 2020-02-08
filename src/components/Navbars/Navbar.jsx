/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    navPills: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h3 style={{color: "#f4f5f7", textTransform: "capitalize"}}>
                  Xestra
                </h3>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        Xestra
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <Link smooth to="/#home">
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.navPills === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.navPills === 1
                        })}
                        onClick={e => this.toggleNavs(e, "navPills", 1)}
                        href=""
                        role="tab"
                      >
                        Home
                      </NavLink>
                    </NavItem>
                  </Link>
                  <Link smooth to="/#skills">
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.navPills === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.navPills === 1
                        })}
                        onClick={e => this.toggleNavs(e, "navPills", 1)}
                        href=""
                        role="tab"
                      >
                        Skills
                      </NavLink>
                    </NavItem>
                  </Link>
                  <Link smooth to="/#portfolio">
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.navPills === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.navPills === 1
                        })}
                        onClick={e => this.toggleNavs(e, "navPills", 1)}
                        href=""
                        role="tab"
                      >
                        Portfolio
                      </NavLink>
                    </NavItem>
                  </Link>
                  <Link smooth to="/#contact">
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.navPills === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.navPills === 1
                        })}
                        onClick={e => this.toggleNavs(e, "navPills", 1)}
                        href=""
                        role="tab"
                      >
                        Contact
                      </NavLink>
                    </NavItem>
                  </Link>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/Xestra1"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                      id="tooltip112445213"
                    >
                      <span className="nav-link-inner--text">
                        Discord
                      </span>
                      <UncontrolledTooltip delay={0} target="tooltip112445213">
                        Xestra#6955
                      </UncontrolledTooltip>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;

// eslint-disable-next-line no-lone-blocks
{/* <UncontrolledDropdown nav>
<DropdownToggle nav>
  <i className="ni ni-ui-04 d-lg-none mr-1" />
  <span className="nav-link-inner--text">Components</span>
</DropdownToggle>
<DropdownMenu className="dropdown-menu-xl">
  <div className="dropdown-menu-inner">
    <Media
      className="d-flex align-items-center"
      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
      target="_blank"
    >
      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
        <i className="ni ni-spaceship" />
      </div>
      <Media body className="ml-3">
        <h6 className="heading text-primary mb-md-1">
          Getting started
        </h6>
        <p className="description d-none d-md-inline-block mb-0">
          Learn how to use Argon compiling Scss, change
          brand colors and more.
        </p>
      </Media>
    </Media>
    <Media
      className="d-flex align-items-center"
      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
      target="_blank"
    >
      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
        <i className="ni ni-palette" />
      </div>
      <Media body className="ml-3">
        <h6 className="heading text-primary mb-md-1">
          Foundation
        </h6>
        <p className="description d-none d-md-inline-block mb-0">
          Learn more about colors, typography, icons and the
          grid system we used for Argon.
        </p>
      </Media>
    </Media>
    <Media
      className="d-flex align-items-center"
      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
      target="_blank"
    >
      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
        <i className="ni ni-ui-04" />
      </div>
      <Media body className="ml-3">
        <h5 className="heading text-warning mb-md-1">
          Components
        </h5>
        <p className="description d-none d-md-inline-block mb-0">
          Browse our 50 beautiful handcrafted components
          offered in the Free version.
        </p>
      </Media>
    </Media>
  </div>
</DropdownMenu>
</UncontrolledDropdown>
<UncontrolledDropdown nav>
<DropdownToggle nav>
  <i className="ni ni-collection d-lg-none mr-1" />
  <span className="nav-link-inner--text">Examples</span>
</DropdownToggle>
<DropdownMenu>
  <DropdownItem to="/landing-page" tag={Link}>
    Landing
  </DropdownItem>
  <DropdownItem to="/profile-page" tag={Link}>
    Profile
  </DropdownItem>
  <DropdownItem to="/login-page" tag={Link}>
    Login
  </DropdownItem>
  <DropdownItem to="/register-page" tag={Link}>
    Register
  </DropdownItem>
</DropdownMenu>
</UncontrolledDropdown> */}
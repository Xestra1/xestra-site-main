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

class NNavbar extends React.Component {
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

export default NNavbar;
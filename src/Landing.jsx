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

https://paste.xestra.us/quqofubofo.xml
*/
import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress,
  CardImg
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footers/Footer.jsx";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar /> {/* finished */}
        <main ref="main">
          {/* 
          * Title - finished
          */}
          <section className="position-relative" id="home">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Xestra,{" "}
                        <span>Developer</span>
                      </h1>
                      <p className="lead text-white">
                        Hello! I'm Xestra, a developer from the United States. I create websites, minecraft servers, and I help manage businesses. 
                      </p>
                      <div className="btn-wrapper">
                        <Button color="default" id="tooltip641002859" type="button">
                          <span className="btn-inner--text">Discord</span>
                        </Button>
                        <UncontrolledTooltip placement="right" delay={0} target="tooltip641002859">
                          Xestra#6955
                        </UncontrolledTooltip>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </section>
          {/* 
          * About - finished
          */}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <Row>
                        <Col lg="1">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4 ml-1">
                            <i className="ni ni-check-bold" />
                          </div>
                        </Col>
                        <Col lg="11">
                          <h6 className="text-primary text-uppercase">
                            About Me
                          </h6>
                          <p className="description mt-3" style={{lineHeight: "2",}}>
                          Hello, my name is Nick but I go by Xestra. I've been doing Minecraft setups for a good two years now. About one year ago, I started to work with web development and got really into it. During those years, I've started many businesses and Minecraft servers which I gained a considerable amount of experience.
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* 
          * Skills - finished
          */}
          <section className="section section-lg" id="skills">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>My Skills</h3>
                    <p>
                      You want website development, minecraft server setups, or management? No problem, I offer all of those services!
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="progress-label">
                              <span>Website Development</span>
                            </div>
                            <div className="progress-percentage">
                              <span>90%</span>
                            </div>
                          </div>
                          <Progress max="100" value="90" color="primary" />
                          <p className="small">HTML, CSS, JS, SASS, Bootstrap, React.js, JQuery, Node.js</p>
                        </div>
                      </li>
                      <li>
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="progress-label">
                              <span>Minecraft Servers Setups</span>
                            </div>
                            <div className="progress-percentage">
                              <span>80%</span>
                            </div>
                          </div>
                          <Progress max="100" value="80" color="primary" />
                          <p className="small">Configurations, Setups</p>
                        </div>
                      </li>
                      <li>
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="progress-label">
                              <span>Management/Financials</span>
                            </div>
                            <div className="progress-percentage">
                              <span>80%</span>
                            </div>
                          </div>
                          <Progress max="100" value="80" color="primary" />
                          <p className="small">Documents, Spreadsheets, Financials, Management, Budgeting</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*  
          * Portfolio - finished - needs info
          */}
          <section className="section section-lg bg-gradient-primary" id="portfolio">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Portfolio</h2>
                  <p className="lead text-white">
                    These are my projects! I created all of them using my computer and loads of coffee.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5 justify-content-center">
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src={require("assets/img/freemcserver.png")} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Free Minecraft Servers
                      </h6>
                      <p className="description mt-3">
                        Basic mini Minecraft servers that anyone can use and contribute to.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="https://github.com/Xestra1/free-mc-servers" target="_blank" rel="noreferrer">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src={require("assets/img/budgetmanager.png")} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Budget Manager
                      </h6>
                      <p className="description mt-3">
                        A simple little website that can let you manage a basic budget.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="https://github.com/Xestra1/Budget-manager" target="_blank" rel="noreferrer">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src={require("assets/img/clickergame.png")} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Clicker Game
                      </h6>
                      <p className="description mt-3">
                        A fun little clicker game that I created for fun and to expand my skills.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="https://github.com/Xestra1/Clicker-Game" target="_blank" rel="noreferrer">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src={require("assets/img/stocktrader.png")} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Stock Trader
                      </h6>
                      <p className="description mt-3">
                        A basic little stock trading game that was created to expand my skills.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="https://github.com/Xestra1/stock-trader" target="_blank" rel="noreferrer">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src={require("assets/img/xestraweb.png")} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Xestra's Website
                      </h6>
                      <p className="description mt-3">
                        The website you are currently look and was made to show my skills and portfolio.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="https://github.com/Xestra1/xestra-site-main" target="_blank" rel="noreferrer">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                {/* <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Sunset Services
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button" href="" target="_blank">
                        Coming Soon
                      </Button>
                    </CardBody>
                  </Card>
                </Col> */}
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 
          * Contact - finished
          */}
          <section className="section section-lg pt-lg-0 section-contact-us" id="contact">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with me?</h4>
                      <p className="mt-0">
                        You have a project idea? I can help make it a reality!
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="fab fa-discord"></i>
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Xestra#6955
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="fab fa-github"></i>
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Xestra1
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer /> {/* not finish */}
      </>
    );
  }
}

export default Landing;
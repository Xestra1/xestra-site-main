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
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  PopoverBody, 
  UncontrolledPopover,
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
        <Navbar /> {/* not finish */}
        <main ref="main">
          {/* 
          * Title - finished
          */}
          <section className="position-relative">
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
                        Hello! I'm Xestra, a developer from the United States. I create websites, minecraft servers, and do discord setups. 
                      </p>
                      <div className="btn-wrapper">
                        <Button color="default" id="tooltip641002859" type="button">
                          <span className="btn-inner--text">Discord</span>
                        </Button>
                        <UncontrolledPopover placement="right" target="tooltip641002859">
                          <PopoverBody>
                            Xestra#6955
                          </PopoverBody>
                        </UncontrolledPopover>
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
          * About - finished - needs text
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
                          <p className="description mt-3">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
          <section className="section section-lg">
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
          * Portfolio
          */}
          <section className="section section-lg bg-gradient-primary">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Portfolio</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 1
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 2
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 3
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 4
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 5
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="shadow border-0 mt-4">
                    <CardImg top width="100%" src="http://via.placeholder.com/318x180" alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Project 6
                      </h6>
                      <p className="description mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <br />
                      <Button color="primary" type="button">
                        GITHUB
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
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
          * Contact
          */}
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="primary"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
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

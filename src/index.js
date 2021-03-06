import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Landing from "Landing.jsx";

ReactDOM.render(
  <BrowserRouter path="/">
    <Landing />
  </BrowserRouter>,
  document.getElementById("root")
);

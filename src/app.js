import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";

import IndecisionApp from "./components/indecision-app";
import "./styles/style.scss";

const props = {
  title: "Indecision App",
  description: "Put your life in the hands of a computer!",
};

ReactDOM.render(
  <IndecisionApp {...props} />,
  document.getElementById("message")
);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components/macro";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

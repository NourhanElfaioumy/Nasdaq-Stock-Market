import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// global styles
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "normalize.css";
import GlobalStyle from "../src/Layout/components/styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "RouteSwitch";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

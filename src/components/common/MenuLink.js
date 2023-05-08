import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ url, name }) => {
  const location = useLocation();
  var isActive = location.pathname === url;
  var className = isActive ? "link-item link-item-active" : "link-item";
  return (
    <Link to={url} className={className}>
      {name}
    </Link>
  );
};

export default MenuLink;

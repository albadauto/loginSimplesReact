import React from "react";
import './Button.css';
const Button = (props) => {
  return <button className="product-button-add">{props.children}</button>;
};

export default Button;

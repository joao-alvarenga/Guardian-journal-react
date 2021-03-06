import React from "react";
import { SecondaryButton } from "./Element.styles";
import styles from "./styles.module.scss";

const Button = ({ children, style, type, onClick, href, className, to }) => {
  switch (type) {
    case "link":
      return (
        <a
          className={`${styles.alink} ${className || ""}`}
          style={style}
          rel="noopener noreferrer"
          target="_blank"
          href={href}
          to={to}
          onClick={onClick}
        >
          {children}
        </a>
      );
    case "secondary":
      return (
        <SecondaryButton style={style} href={href} to={to} onClick={onClick}>
          {children}
        </SecondaryButton>
      );
    default:
      return (
        <SecondaryButton href={href} to={to} onClick={onClick}>
          {children}
        </SecondaryButton>
      );
  }
};

export default Button;

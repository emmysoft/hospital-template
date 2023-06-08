import React from "react";
import { Link } from "react-router-dom";

export function Button({ to, children, style, className }) {
  return (
    <Link to={to} style={style} className={className}>
      {children}
    </Link>
  );
}

export function TransParentButton({ to, children, style }) {
  return (
    <Link to={to} style={style}>
      {children}
    </Link>
  );
}

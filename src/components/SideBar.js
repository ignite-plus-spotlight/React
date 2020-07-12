import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/poll">
        POLL
      </a>

      <a className="menu-item" href="/help">
        HELP?
      </a>

      <a className="menu-item" href="/about">
        ABOUT
      </a>
    </Menu>
  );
};
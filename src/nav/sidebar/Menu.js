import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseUp={this.props.handleMouseDown}
        className={visibility}
      >
        <NavLink to="/" exact>Home</NavLink>
        <br />
        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
    );
  }
}

export default Menu;

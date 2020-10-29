import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import Icon from "../assets/camera icon.png";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeSidebar = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Menu
        onStateChange={(state) => this.handleStateChange(state)}
        isOpen={this.state.menuOpen}
        className="navMenu"
        customBurgerIcon={<img src={Icon} alt="icon" />}
        width={"20%"}
      >
        <h5>
          <Link to="/" className="navLink" onClick={() => this.closeSidebar()}>
            Home
          </Link>
        </h5>
        <h5>
          <Link
            to="/about"
            className="navLink"
            onClick={() => this.closeSidebar()}
          >
            About
          </Link>
        </h5>
        <h5>
          <Link
            to="/contact"
            className="navLink"
            onClick={() => this.closeSidebar()}
          >
            Contact Me
          </Link>
        </h5>
      </Menu>
      // <Sidebar
      //   sidebar={
      //     <Router>
      //       <div>
      //         <Link to="/about" onClick={this.closeSidebar}>
      //           About
      //         </Link>
      //         <br />
      //         <Link to="/contact" onClick={this.closeSidebar}>
      //           Contact Me
      //         </Link>
      //       </div>
      //     </Router>
      //   }
      //   open={this.state.sidebarOpen}
      //   onSetOpen={this.onSetSidebarOpen}
      //   styles={{
      //     sidebar: {
      //       background: "white",
      //       width: "30vw",
      //       height: "100vh",
      //       margin: 0,
      //       padding: 0
      //     }
      //   }}
      // >

      // <button
      //   className="iconButton"
      //   onClick={() => this.onSetSidebarOpen(true)}
      // >
      //   <img src={Icon} alt="icon" className="icon" />
      // </button>
      // </Sidebar>
    );
  }
}

export default Navigation;

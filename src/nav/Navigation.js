import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Icon from "../assets/camera icon.jpg";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import MenuButton from "./sidebar/MenuButton";
import Menu from './sidebar/Menu';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sidebarOpen: false
      visible: false
    };
  }

  // onSetSidebarOpen = open => {
  //   this.setState({ sidebarOpen: open });
  // };

  // closeSidebar = () => {
  //   this.setState({ sidebarOpen: false })

  // }

  // toggleMenu = () => {
  //   this.setState({
  //     visible: !this.state.visible
  //   });
  // };

  handleMouseDown = (e) => {
    this.setState({
      visible: !this.state.visible
    });

    // console.log("clicked");
    // e.stopPropagation();
  };

  render() {
    return (
      <React.Fragment>
         {/* <Router><NavLink to="/about" >About</NavLink></Router> */}
        {/* <Sidebar
          sidebar={
            <Router>
            <div>
              <Link to="/about" onClick={this.closeSidebar}>About</Link>
              <br />
              <Link to="/contact" onClick={this.closeSidebar}>Contact Me</Link>
            </div>
            </Router>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          // touch={false}
        >
          <button
            className="iconButton"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <img src={Icon} alt="icon" className="icon" />
          </button>
        </Sidebar> */}
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </React.Fragment>
    );
  }
}

export default Navigation;

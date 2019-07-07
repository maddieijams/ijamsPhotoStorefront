import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Icon from '../assets/camera icon.jpg';

const sticky = {
  position: "fixed",
  // paddingBottom: "20em"
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <React.Fragment>
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className='iconButton' onClick={() => this.onSetSidebarOpen(true)}>
          <img src={Icon} alt='icon' className='icon'></img>
        </button>
      </Sidebar>
      </React.Fragment>
    );
  }
}

export default Navigation;

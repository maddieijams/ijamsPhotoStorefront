import React, { Component } from "react";
import Icon from "../../assets/camera icon.png";

class MenuButton extends Component {
    render() {
      return (
        <button className="iconButton"
                onMouseUp={this.props.handleMouseDown}>
                    <img src={Icon} alt="icon" className="icon" />
                </button>
      );
      }
  }
   
  export default MenuButton;
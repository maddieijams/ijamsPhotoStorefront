import React, { Component } from "react";
import APIURL from '../../helpers/environment';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      id: '',
    };
  }

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.fetchPhoto();
  }

  fetchPhoto = () => {
    fetch(`${APIURL}/photo/item/${this.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(item =>
        this.setState({ photo: item })
      );
  };

  render() {
    return (

              <img
                src={this.state.photo.imageURL}
                alt="item"
                width="100%"
                height="100%"
              />

    );
  }
}

export default ItemDisplay;
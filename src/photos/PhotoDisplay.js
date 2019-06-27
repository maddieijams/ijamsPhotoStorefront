import React, { Component } from "react";
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

class PhotoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    fetch(`http://localhost:3050/photo/getall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(photos =>
        this.setState({ photos: photos }, () => console.log(this.state.photos))
      );
  };

  render() {
    return this.state.photos.map((el, index) => (
      <div className="photoDisplay" key={index}>
        <ul>
          <li>
            <Link to={`/item/${el.id}`} >
            <img src={el.imageURL} alt="item" width="200px" height="auto" />
            </Link>
          </li>
          {/* <li>{el.title}</li>
          <li>{el.desc}</li>
          <li>{el.price}</li> */}

        </ul>
      </div>
    ));
  }
}

export default PhotoDisplay;

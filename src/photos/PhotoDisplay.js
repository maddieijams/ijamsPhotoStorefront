import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import APIURL from '../helpers/environment';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

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
    fetch(`${APIURL}/photo/getall`, {
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
    const childElements = this.state.photos.map((el, index) => (
      <div className="image-element-class" key={index}>
        <Link to={`/item/${el.id}`}>
          <img src={el.imageURL} alt="item" width="400px" height="auto" />
        </Link>
      </div>
    ));

    return (
      <div className="masonryDisplay">
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"div"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
        </Masonry>
      </div>
    );
  }
}

export default PhotoDisplay;

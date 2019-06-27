import React, { Component } from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      id: this.props.id,
      price: 30
    };
  }

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.fetchPhoto();
  }

  fetchPhoto = () => {
    fetch(`http://localhost:3050/photo/item/${this.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(item =>
        this.setState({ photo: item }, () => console.log(this.state.photo))
      );
  };

  framePrice = () => {
    this.setState({ price: 45 }, () => console.log(this.state.price))
  }

  printPrice = () => {
    this.setState({ price: 30 }, () => console.log(this.state.price))
  }

  render() {
    return (
      <React.Fragment>
      {this.state.photo ? 
      <React.Fragment>
          <ul>
            <li>
              <img
                src={this.state.photo.imageURL}
                alt="item"
                width="300px"
                height="auto"
              />
            </li>
            <li>{this.state.photo.title}</li>
            {/* <li>{this.state.photo.desc}</li> */}
            <li>Price: ${this.state.price}</li>
          </ul>

          <Link to={`/image/${this.state.photo.id}`}><Button>View high resolution image</Button></Link>

<FormGroup tag="fieldset">
<legend>How would you like it?</legend>
<FormGroup check>
  <Label check>
    <Input type="radio" name="frame" onClick={this.framePrice} />{' '}
    In a cool frame!
  </Label>
</FormGroup>
<FormGroup check>
  <Label check>
    <Input type="radio" name="frame" onClick={this.printPrice} />{' '}
    No frame, just the print.
  </Label>
</FormGroup>
<FormGroup check >
  <Label check>
    <Input type="radio" name="size" />{' '}
    8x10in
  </Label>
</FormGroup>
<FormGroup check >
  <Label check>
    <Input type="radio" name="size" />{' '}
    5x7in
  </Label>
</FormGroup>
</FormGroup>
      </React.Fragment>
  : <div></div>}
 </React.Fragment>
    );
  }
}

export default ItemDisplay;
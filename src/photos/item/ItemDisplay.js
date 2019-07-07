import React, { Component } from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      id: '',
      price: 30
    };
  }

  componentDidMount() {
    this.fetchPhoto();
  }
  
  fetchPhoto = () => {
    this.id = this.props.match.params.id;
    console.log(this.id)
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
        <h1>{this.state.photo.title}</h1>
         
              <img
                src={this.state.photo.imageURL}
                alt="item"
                width="300px"
                height="auto"
              />
            <br />
            
            {/* <li>{this.state.photo.desc}</li> */}
            Price: ${this.state.price}
            <br />

          <Link to={`/image/${this.id}`}><Button>View high resolution image</Button></Link>

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
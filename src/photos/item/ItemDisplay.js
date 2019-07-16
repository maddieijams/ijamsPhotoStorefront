import React, { Component } from "react";
import { FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      id: "",
      price: 30
    };
  }

  componentDidMount() {
    this.fetchPhoto();
  }

  fetchPhoto = () => {
    this.id = this.props.match.params.id;
    console.log(this.id);
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
    this.setState({ price: 45 }, () => console.log(this.state.price));
  };

  printPrice = () => {
    this.setState({ price: 30 }, () => console.log(this.state.price));
  };

  render() {
    return (
      <div className='itemContainer'>
        {this.state.photo ? (
          <div>

            <Container>
              <Row >
                <Col className='text-center'>
            <h1>{this.state.photo.title}</h1>
            <img
              src={this.state.photo.imageURL}
              alt="item"
              width="300px"
              height="auto"
            />
            <br />
            <Link to={`/image/${this.id}`}>
              <Button>View high resolution image</Button>
            </Link>
            </Col>
            <Col className='text-center'>
            <FormGroup tag="fieldset">
            
              <legend>How would you like it?</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="frame" onClick={this.framePrice} />{" "}
                  In a cool frame!
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="frame" onClick={this.printPrice} />{" "}
                  No frame, just the print.
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="size" /> 8x10in
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="size" /> 5x7in
                </Label>
              </FormGroup>
            </FormGroup>
            <h4>Price: ${this.state.price}</h4>
            <Link to="/address">
              <Button>Continue Checkout</Button>
            </Link>
            </Col>
            </Row>
            </Container>

          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ItemDisplay;

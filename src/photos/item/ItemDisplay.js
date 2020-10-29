import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      id: "",
      price: 30,
    };
  }

  componentDidMount() {
    this.fetchPhoto();
  }

  fetchPhoto = () => {
    this.id = this.props.match.params.id;
    console.log(this.id);
    fetch(`${APIURL}/photo/item/${this.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((item) => this.setState({ photo: item }));
  };

  framePrice = () => {
    this.setState({ price: 45 });
  };

  printPrice = () => {
    this.setState({ price: 30 });
  };

  render() {
    return (
      <div className="itemContainer">
        {this.state.photo ? (
          <div>
            <Container>
              <Row>
                <Col className="text-center">
                  <h3>{this.state.photo.title}</h3>
                  <img
                    src={this.state.photo.imageURL}
                    alt="item"
                    width="300px"
                    height="auto"
                  />

                  <Link to={`/image/${this.id}`}>
                    <Button className="mt-3">View high resolution image</Button>
                  </Link>
                </Col>
                <Col className="text-center">
                  <FormGroup tag="fieldset">
                    <b>Frame options:</b>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="frame"
                          onClick={this.framePrice}
                        />{" "}
                        In a cool frame!
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="frame"
                          onClick={this.printPrice}
                        />{" "}
                        No frame, just the print.
                      </Label>
                    </FormGroup>
                    <b className="mt-3">Size options:</b>
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
                  <b>Price: ${this.state.price}</b>
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

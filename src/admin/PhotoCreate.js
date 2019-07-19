import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import APIURL from "../helpers/environment";

class PhotoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageURL: "",
      desc: "",
      price: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch(`${APIURL}/photo/create`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept":"application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(data => {
        this.setState({
            title: "",
            imageURL: "",
            desc: "",
            price: ""
        });
      });
  };

  render() {
    return (
      <div className="photoCreateForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="imageURL">Image</Label>
            <Input
              id="imageURL"
              type="text"
              name="imageURL"
              value={this.state.imageURL}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="desc">Description</Label>
            <Input
              id="desc"
              type="text"
              name="desc"
              value={this.state.desc}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              id="price"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

            <center>
              <Button type="submit">
                Submit
              </Button>
            </center>
        </Form>
      </div>
    );
  }
}

export default PhotoCreate;
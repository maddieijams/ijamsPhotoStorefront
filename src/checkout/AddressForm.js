import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import APIURL from "../helpers/environment";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: ""
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
    fetch(`${APIURL}/address/customer`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(data => {
        this.setState({
          name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          email: ""
        });
      });
  };

  render() {
    return (
      <div className="address">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="zip">Zip Code</Label>
            <Input
              id="zip"
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <Link to="/checkout">
            <center>
              <Button className="modalBtn" type="submit">
                Submit
              </Button>
            </center>
          </Link>
        </Form>
      </div>
    );
  }
}

export default AddressForm;

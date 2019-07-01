import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      address: '', 
      city: '',
      state: '',
      zip: '',
      email: ''
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleCreate = (e) => {
  e.preventDefault()
  console.log(this.state)
  fetch('http://localhost:3050/address/customer', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then((res) => res.json())
  .then((data) => {
      this.setState({ 
        name: '',
        address: '', 
        city: '',
        state: '',
        zip: '',
        email: ''
      })
    }
  )
  // console.log(this.state)

}

  render() {

    return (
      <div className="address">
                                  <Form onSubmit={this.handleCreate}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input id="name" type="text" name="name" value={this.state.name || ''} onChange={this.handleChange} required ></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input id="address" type="text" name="address" value={this.state.address || ''} onChange={this.handleChange} required></Input>
                            </FormGroup>

                            <FormGroup>
                            <Label for="city">City</Label>
                                <Input id="city" type="text" name="city" value={this.state.city || ''} onChange={this.handleChange} required></Input>
                            </FormGroup>
                            <FormGroup>
                            <Label for="state">State</Label>
                                <Input id="state" type="text" name="state" value={this.state.state || ''} onChange={this.handleChange} required></Input>
                            </FormGroup>

                            <FormGroup>
                            <Label for="lng">Zip Code</Label>
                                <Input id="lng" type="text" name="lng" value={this.state.lng || ''} onChange={this.handleChange} required></Input>
                            </FormGroup>

                            <FormGroup>
                            <Label for="email">Email Address</Label>
                                <Input id="email" type="text" name="email" value={this.state.email || ''} onChange={this.handleChange} required></Input>
                            </FormGroup>

                            <center><Button className="modalBtn" type="submit">Create</Button></center>

                            </Form>
      </div>
    );
  }
}

export default AddressForm;
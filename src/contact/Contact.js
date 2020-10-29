import React, { Component } from "react";
import ContactForm from "./ContactForm";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="m-4">
          <h4 className="text-center">Contact Me</h4>
          <ContactForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;

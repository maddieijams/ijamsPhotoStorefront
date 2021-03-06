import React, { Component } from "react";
import "./App.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./checkout/CheckoutForm";
import PhotoDisplay from "./photos/PhotoDisplay";
import AddressForm from "./checkout/AddressForm";
import ItemDisplay from "./photos/item/ItemDisplay";
import ItemImage from "./photos/item/ItemImage";
import Navigation from "./nav/Navigation";
import About from "./about/About";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PhotoCreate from "./admin/PhotoCreate";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="d-flex flex-row">
            <Navigation />
            <span className="title d-flex align-items-center">
              Ijams Photography
            </span>
          </div>

          <Route path="/" exact component={PhotoDisplay} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/address" component={AddressForm} />
          <Route path="/item/:id" component={ItemDisplay} />
          <Route path="/image/:id" component={ItemImage} />
          <Route path="/create" component={PhotoCreate} />

          <StripeProvider apiKey="pk_test_PZScD6MMQk4mR7MEx65yXuxQ00n6AeQWBi">
            <div>
              <Elements>
                <Route path="/checkout" component={CheckoutForm} />
              </Elements>
            </div>
          </StripeProvider>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from "./checkout/CheckoutForm";
import PhotoDisplay from "./photos/PhotoDisplay";
import AddressForm from "./checkout/AddressForm";
import ItemDisplay from "./photos/item/ItemDisplay";
import ItemImage from './photos/item/ItemImage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>

          <Route path="/" exact component={PhotoDisplay} />
          <Route path="/address" component={AddressForm} />
          <Route path="/item/:id" component={ItemDisplay} />
          <Route path="/image/:id" component={ItemImage} />


          <StripeProvider apiKey="pk_test_PZScD6MMQk4mR7MEx65yXuxQ00n6AeQWBi">
            <div>
              <Elements>
                <Route path="/checkout" component={CheckoutForm} />
              </Elements>
            </div>
          </StripeProvider>
          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

// context API: 
// Provider
// Consumer
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('hello from details');
  }

  addToCart = () => {
    console.log('hello from add to cart');
  }

  render() {
    return (
      // value can be an object too.
      <ProductContext.Provider value={{ 
        ...this.state, 
        handleDetails: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
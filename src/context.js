import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

// context API: 
// Provider and Consumer 
const ProductContext = React.createContext();

class ProductProvider extends Component {
  // constructor(props) {
  //   super(props);
  //   this.tester = this.tester.bind(this);
  // }

  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      const singleItem = { ...product };
      tempProducts = [...tempProducts, singleItem];
    })

    this.setState( () => {
      return {products: tempProducts}
    })
  }

  handleDetail = () => {
    console.log('hello from details');
  }

  addToCart = (id) => {
    console.log(`hello from add to cart ${id}`);
  }

  // *** testing for reference issue of the products ***
  // tester() {
  //   console.log('State product: ', this.state.products[0].inCart);
  //   console.log('Data product: ', storeProducts[0].inCart);

  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true
  //   this.setState( () => {
  //     return {products: tempProducts}
  //   }, () => {
  //     console.log('State product: ', this.state.products[0].inCart);
  //     console.log('Data product: ', storeProducts[0].inCart);
  //   })
  // }

  render() {
    return (
      // value can be an object too.
      <ProductContext.Provider value={{ 
        ...this.state, 
        handleDetails: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {/* <button onClick={this.tester}>Test Button</button> */}
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

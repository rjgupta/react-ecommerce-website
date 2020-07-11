import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {
    // console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            {/* product row */}
            <div className="row">
              {/* always use a function when using Context Consumer
                  the value is not passed down as a prop                
              */}
              <ProductConsumer>
                {(value) => {
                  // console.log(value);
                  return value.products.map( product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

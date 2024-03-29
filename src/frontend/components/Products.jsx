 import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../assets/styles/components/coomponents/Products.scss';
import { auxAddToCart } from './auxReducers'

const Products = (props) => {
  const { cart, products, productsByCategory } = props;
  const handleAddToCart = (product) => {
    const productToCart = auxAddToCart( cart.slice(), product);
    props.addToCart(productToCart);
  }

  return (
    <div className="Products">
      <h2>Products</h2>
      <div className="Products-items">
        {
          products
            .filter((productFilter) => {
              if (productsByCategory === "") return true;
              return productFilter.categories.includes(productsByCategory);
            })
            .map((product) => (
              <div key={product.id} className="Products-item">
                  <img src={product.image} alt={product.title} />
                  <div className="Products-item-info">
                    <div>
                    <h5>{product.title}</h5>
                    </div>
                      <h4>${product.sellingPrice}</h4>
                  </div>
                    <h6>{product.description}</h6>
                <button  onClick={() => handleAddToCart(product)}>
                  <h3>Add to Cart</h3>
              </button>
                </div>
            )
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
    productsByCategory: state.productsByCategory,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
 import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../assets/styles/components/coomponents/Products.scss';

const Products = (props) => {
  const { products, productsByCategory } = props;
  const handleAddToCart = (product) => {
    props.addToCart(product);
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
              <button key={product.id} onClick={() => handleAddToCart(product)}>
                <div className="Products-item">
                  <img src={product.image} alt={product.title} />
                  <div className="Products-item-info">
                    <h2>
                      {product.title}
                      <div>
                      {'  '}
                      </div>
                      </h2>
                      <span>
                        <h2>${product.sellingPrice}</h2>
                      </span>
                    <p>{product.description}</p>
                  </div>
                </div>
              </button>
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
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
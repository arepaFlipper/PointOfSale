import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
//import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(categorie => (
          <div className="Products-item" key={categorie.id}>
            <img src={categorie.logo} alt={categorie.title} />
            <div className="Products-item-info">
              <h2> 
                {categorie.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
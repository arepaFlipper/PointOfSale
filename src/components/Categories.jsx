import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
//import '../styles/components/Products.styl';

const Categories = (props) => {
  console.log(props);
  const { categories } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {categories.map(categorie => (
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
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
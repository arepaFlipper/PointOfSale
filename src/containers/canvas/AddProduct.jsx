import React from 'react';
import { connect } from 'react-redux'
import '../../assets/styles/components/coomponents/AddProduct.scss';

const AddProduct = (props) => {
  const { products } = props;
  return(
    <div className="Management">
      <section className='Add__container'>
        <h2>
            ADD NEW PRODUCT
        </h2>
        <form className='Add__container--form'>
          <input
            name='name'
            className='input-name'
            type='text'
            placeholder='Product Title'
            onChange=""
          />

          <div className="dropdown">
            <button className="dropbtn">Choose Category</button>
            <div className="dropdown-content">
              <a href="#">PIZZA</a>
              <a href="#">PASTELES</a>
              <a href="#">HAMBURGUESAS</a>
              <a href="#">BOWLS</a>
              <a href="#">SUSHI</a>
              <a href="#">BEBIDAS</a>
            </div>
          </div>
          <div className="horizonter">
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Quantity'
              onChange=""
            />
            <span></span>
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Buying price'
              onChange=""
            />
            <span></span>
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Selling price'
              onChange=""
            />

          </div>
          <div className="Add__container--form__button">
          <button className='button'>
              Add product
          </button>
          </div>
        </form>
      </section>             
    </div>
  );
};
const mapStateToProps = state => {
  return {
    products: state.products,
    productsByCategory: state.productsByCategory,
  };
};

export default connect(mapStateToProps,null)(AddProduct);

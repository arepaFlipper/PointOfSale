import React from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../actions/index';
import '../../assets/styles/components/coomponents/AddProduct.scss';

const AddProduct = (props) => {
  const { title, categories, instock, buyingPrice, sellingPrice  } = props.products;

  const handleSummit = (event) => {
    event.preventDefault();
    props.addNewProduct(form);
    props.history.push('/products');
  }

  const handleAddProduct = () => {
    console.log('here is the cart')
    // props.addNewProduct({
    //   title, categories, instock, buyingPrice, sellingPrice 
    // });
  }
  return(
    <div className="Management">
      <section className='Add__container'>
        <h2>
            ADD NEW PRODUCT
        </h2>
        <form className='Add__container--form' >
          <input
            name='name'
            className='input-name'
            type='text'
            placeholder='Product Title'
            // onChange={handleSummit}
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
              name='qty'
              className='add-input'
              type='number'
              min="0"
              placeholder='Quantity'
              // onChange={handleSummit}
            />
            <input
              name='price'
              className='add-input'
              type='number'
              min='0'
              step='any'
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder='Buying price'
              // onChange={handleSummit}
            />
            <input
              name='price'
              className='add-input'
              type='number'
              min='0'
              step='any'
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder='Selling price'
              // onChange={handleSummit}
            />

          </div>
          <div className="Add__container--form__button">
          <button className='button' type="submit" onClick={()=>handleAddProduct()}>
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

const mapDispatchToProps = {
  addNewProduct,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);

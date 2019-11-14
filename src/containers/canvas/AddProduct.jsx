import React from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../actions/index';
import '../../assets/styles/components/coomponents/AddProduct.scss';

const AddProduct = (props) => {

  const [form, setValues] = React.useState({
    id: '',
    title: "", 
    categories: [], 
    instock: 0, 
    buyingPrice: 0, 
    sellingPrice: 0
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.name==="categories" ? [event.target.value] : event.target.value,
    });
  };
  
  const handleSummit = (event) => {
    event.preventDefault();
    props.addNewProduct(form);
    props.history.push('/products');
  }
  return(
    <div className="Management">
      <section className='Add__container'>
        <h2>
            ADD NEW PRODUCT
        </h2>

        <form className='Add__container--form' onSubmit={handleSummit} >
          <input
            name='title'
            className='input-name'
            type='text'
            placeholder='Product Title'
            onChange={handleInput}
          />
          <select
           name="categories"
           placeholder="Select an existing category" 
           required
           onChange={handleInput}
           >
            {/* <option value="selected" disabled>Select an existing category </option> */}
            {props.categories.map((category)=>(
              <option
               key={category.id}
               value={category.id}
              >
                {category.id}
              </option>
            ))}
          </select>

          <div className="horizonter">
            <input
              name='inStock'
              className='add-input'
              type='number'
              min="0"
              placeholder='Quantity'
              onChange={handleInput}
            />
            <input
              name='buyingPrice'
              className='add-input'
              type='number'
              min='0'
              step='any'
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder='Buying price'
              onChange={handleInput}
            />
            <input
              name='sellingPrice'
              className='add-input'
              type='number'
              min='0'
              step='any'
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder='Selling price'
              onChange={handleInput}
            />

          </div>
          <div className="Add__container--form__button">
          <button className='button' type="submit">
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
    categories: state.categories,
    productsByCategory: state.productsByCategory,
  };
};

const mapDispatchToProps = {
  addNewProduct,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);

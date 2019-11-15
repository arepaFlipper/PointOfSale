import React from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/index';
import '../../assets/styles/components/coomponents/AddProduct.scss';

const UpdateProduct = (props) => {

  const getProductToUpdate = JSON.parse(sessionStorage.getItem("updateId"));

  const [form, setValues] = React.useState({
    id: getProductToUpdate.id,
    title:  getProductToUpdate.title, 
    categories: getProductToUpdate.categories, 
    inStock: getProductToUpdate.inStock, 
    buyingPrice: getProductToUpdate.buyingPrice, 
    sellingPrice: getProductToUpdate.sellingPrice,
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.name==="categories" ? [event.target.value] : event.target.value,
    });
  };
  
  const handleSummit = (event) => {
    event.preventDefault();
    props.updateProduct(form);
    props.history.push('/products');
  }
  return(
    <div className="Management">
      <section className='Add__container'>
        <h2>
            Update Product: {getProductToUpdate.title}
        </h2>

        <form className='Add__container--form' onSubmit={handleSummit} >
          <input
            name='title'
            value={form.title}
            className='input-name'
            type='text'
            placeholder='Product Title'
            onChange={handleInput}
          />
          <select
           name="categories"
           value={form.categories[0]}
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
              value={form.inStock}
              className='add-input'
              type='number'
              min="0"
              placeholder='Quantity'
              onChange={handleInput}
            />
            <input
              name='buyingPrice'
              value={form.buyingPrice}
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
              value={form.sellingPrice}
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
              Update product
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
  };
};

const mapDispatchToProps = {
  updateProduct,
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProduct);

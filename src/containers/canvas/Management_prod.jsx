import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../assets/styles/components/coomponents/Management_prod.scss';
import { removeProduct } from '../../actions/index'

const ManagementProd = (props) => {
  const { products } = props;
  return(
    <div className="Management">
      <div className="Management-top"><div></div><Link to={`/add`}><button>ADD NEW</button></Link></div>
      <section>      
      </section>
          <div className="Management-content">
              <div className="Management-item" >
                <div className="Management-element"> 
                  <div className="Management-element_id"><h5>ID</h5></div>
                  <div className="Management-element_title"><h5>Name</h5></div>
                  <div className="Management-element_container"><h5>Category </h5> </div>
                  <div className="Management-element_container"><h5> In stock</h5> </div>
                  <div className="Management-element_container"><h5> Buying price</h5> </div>
                  <div className="Management-element_container"><h5> selling price</h5> </div>
                  <div className="Management-element_container"><h5> Edit product</h5> </div>
                  <div className="Management-element_container"><h5> Remove product</h5> </div>
                </div>
                {
                  products.map((product) =>(
                    
                <div key={product.id} className="Management-element"> 
                    <div className="Management-element_id">{product.id}</div>
                    <div className="Management-element-title"><span><h5>{product.title}</h5></span></div>
                    <div className="Management-element-category"><span><h5>{ product.categories[0] } </h5> </span></div>
                    <div className="Management-element_container"><span><h5> many</h5> </span></div>
                    <div className="Management-element_container"><span><h5>${Math.ceil(product.buyingPrice * 100) / 100} </h5> </span></div>
                    <div className="Management-element_container"><span><h5>${Math.ceil(product.sellingPrice * 100) / 100} </h5> </span></div>
                    <div><Link to="/edit" id="trash" className="far fa-edit" onClick={() => sessionStorage.setItem("updateId",JSON.stringify(product))} /></div>
                    <div><i id="trash" className="fas fa-trash-alt" onClick={() => props.removeProduct(product.id)} /></div>
                </div>
                  )
                  )
                }
              </div>
              
          </div>
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
  removeProduct,
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagementProd);

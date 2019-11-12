import React from 'react';
import { connect } from 'react-redux'
import '../../assets/styles/components/coomponents/Management_prod.scss';

const ManagementProd = (props) => {
  const { products } = props;
  return(
    <div className="Management">
          <div className="Management-content">
              <div className="Management-item" >
                <div className="Management-element"> 
                  <div className="Management-element_id">ID</div>
                  <div className="Management-element_title"><span><h3>Name</h3></span></div>
                  <div className="Management-element_container"><span><h3>Category </h3> </span></div>
                  <div className="Management-element_container"><span><h3> In stock</h3> </span></div>
                  <div className="Management-element_container"><span><h3> Buying price</h3> </span></div>
                  <div className="Management-element_container"><span><h3> selling price</h3> </span></div>
                  <div className="Management-element_container"><span><h3> Product expire</h3> </span></div>
                </div>
                {
                  products.map((product) =>(
                    
                <div className="Management-element"> 
                    <div className="Management-element_id">{product.id}</div>
                    <div className="Management-element_title"><span><h3>{product.title}</h3></span></div>
                    <div className="Management-element_container"><span><h3>{  } </h3> </span></div>
                    <div className="Management-element_container"><span><h3> many</h3> </span></div>
                    <div className="Management-element_container"><span><h3>{product.price -1} </h3> </span></div>
                    <div className="Management-element_container"><span><h3>{product.price} </h3> </span></div>
                    <div className="Management-element_container"><span><h3> Tomorrow</h3> </span></div>
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

export default connect(mapStateToProps,null)(ManagementProd);

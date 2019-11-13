import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../assets/styles/components/coomponents/Management_prod.scss';

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
                  <div className="Management-element_id"><h3>ID</h3></div>
                  <div className="Management-element_title"><h3>Name</h3></div>
                  <div className="Management-element_container"><h3>Category </h3> </div>
                  <div className="Management-element_container"><h3> In stock</h3> </div>
                  <div className="Management-element_container"><h3> Buying price</h3> </div>
                  <div className="Management-element_container"><h3> selling price</h3> </div>
                  <div className="Management-element_container"><h3> Product expire</h3> </div>
                </div>
                {
                  products.map((product) =>(
                    
                <div className="Management-element"> 
                    <div className="Management-element_id">{product.id}</div>
                    <div className="Management-element-title"><span><h3>{product.title}</h3></span></div>
                    <div className="Management-element-category"><span><h3>{ product.categories.map((categorie)=>(categorie)) } </h3> </span></div>
                    <div className="Management-element_container"><span><h3> many</h3> </span></div>
                    <div className="Management-element_container"><span><h3>${Math.ceil(product.buyingPrice * 100) / 100} </h3> </span></div>
                    <div className="Management-element_container"><span><h3>${Math.ceil(product.sellingPrice * 100) / 100} </h3> </span></div>
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

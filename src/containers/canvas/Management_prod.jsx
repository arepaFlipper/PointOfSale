import React from 'react';
import '../../assets/styles/components/coomponents/Management_prod.scss';

const ManagementProd = () => {
return(
<div className="Checkout">
      <div className="Checkout-content">
          <div className="Checkout-item" >
            <div className="Checkout-element"> 
              <div className="Checkout-element_id">ID</div>
              <div className="Checkout-element_title"><span><h4>Name</h4></span></div>
              <div className="Checkout-element_container"><span><h4>Category </h4> </span></div>
              <div className="Checkout-element_container"><span><h4> In stock</h4> </span></div>
              <div className="Checkout-element_container"><span><h4> Buying price</h4> </span></div>
              <div className="Checkout-element_container"><span><h4> selling price</h4> </span></div>
              <div className="Checkout-element_container"><span><h4> Product expire</h4> </span></div>
            </div>
          </div>
      </div>
</div>
)
};



export default (ManagementProd);

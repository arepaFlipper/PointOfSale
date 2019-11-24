import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import '../../assets/styles/components/coomponents/Checkout.scss';


global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.btoa = () => {};

//const fs = require('fs')
const jsPDF = require('jspdf/dist/jspdf.node.min')

const Checkout = (props) => {
  const { cart } = props;
  const receiptGenerator = (cartList) => {
    let i = 2;
    if(process.env.BROWSER){
      let doc = new jsPDF();
      doc.text('RECEIPT',80, 10);
      cartList.map(item=>{
        i++;
        doc.text(`${JSON.stringify(item.product.title)} ..... \$${JSON.stringify(item.product.sellingPrice)}`, 10, i*10)
      }
      )
      doc.save('receipt.pdf');

      delete global.window;
      delete global.navigator;
      delete global.btoa;
    }
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
     
      
      

        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>There is no order</h2>}
          <div className="Checkout-item" >
            <div className="Checkout-element"> 
              <div className="Checkout-element_title"><h3>Product</h3></div>
              <div className="Checkout-element_container"><span><h4>price per unit($)</h4></span></div>
              <div className="Checkout-element_container"><span><h4>Quantity</h4></span></div>
              <div className="Checkout-element_container"><span><h4>Total price</h4></span></div>
              <div className ="fas fa-trash-alt"></div>
            </div>
          </div>
        {cart.map((item,index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element" key={item}> 
              <div className="Checkout-element_title"><h4>{item.product.title}</h4></div>
              <div className="Checkout-element_container"><span>$ {item.product.sellingPrice}</span></div>
              <div className="Checkout-element_container"><span>x {item.amount}</span></div>
              <div className="Checkout-element_container"><span>$ {Math.ceil(item.product.sellingPrice * 100 * item.amount) / 100}</span></div>
              <i id="trash" className="fas fa-trash-alt" onClick={() => props.removeFromCart(item.idItemCart)} />
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {`${cart.reduce(
            (accumulate, item) =>
            Math.ceil(accumulate + item.product.sellingPrice * item.amount * 100), 0) / 100}`}</h4>
          <button onClick={()=> receiptGenerator(cart)}>Buy order</button>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

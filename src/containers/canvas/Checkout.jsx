import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import '../../assets/styles/components/coomponents/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.product.title}</h4>
              <span>$ {item.product.price}</span>
              <span>x {item.amount}</span>
              <span>($ {item.product.price * item.amount})</span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => props.removeFromCart(item.idItemCart)} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {`${cart.reduce(
            (accumulate, item) =>
            Math.ceil(accumulate + item.product.price * item.amount * 100), 0) / 100}`}</h4>
        </div>
      )}
      <button>Buy order</button>
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

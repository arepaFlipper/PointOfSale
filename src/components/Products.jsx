import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../assets/styles/components/coomponents/Products.scss';

const Products = (props) => {
  const { products, productsByCategory } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
  }


  const addToCartAction = (cart, productToCart) => {
    let exist = false;
    cart = cart.map((item) => {
      if (item.idItemCart === productToCart.id) {
        item.amount += 1;
        exist = true;
      }
      return item;
    });
  
    return (
      exist
      ? cart
      : [...cart, {
        idItemCart: productToCart.id,
        product: productToCart,
        amount: 1,
      }]
    );
  };
  



  return (
    <div className="Products">
      <div className="Products-items">
        {
          
          products.filter((productFilter) => {
              if (productsByCategory === "") return true;
              return productFilter.labels.includes(productsByCategory);
          })
            .map((product) => (
              <button key={product.id} onClick={() => handleAddToCart(product),
                                                () => addToCartAction(cart, Product)}>
                <div className="Products-item">
                  <img src={product.image} alt={product.title} />
                  <div className="Products-item-info">
                    <h2>
                      {product.title}
                      <div>
                      {'  '}
                      </div>
                      <span>
                        {product.price}
                      </span>
                    </h2>
                    <p>{product.description}</p>
                  </div>
                </div>
              </button>
            )
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
    productsByCategory: state.productsByCategory,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
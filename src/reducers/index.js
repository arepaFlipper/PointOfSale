const addToCartAction = function (cart, productToCart) {
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: addToCartAction(state.cart.slice(), action.payload)
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.idItemCart !== action.payload)
      }
    case 'VIEW_PRODUCTS_BY_CATEGORIES':
      return {
        ...state,
        productsByCategory: (state.productsByCategory === action.payload) ? "" : action.payload
      }
    default:
      return state;
  }
};

export default reducer;
  
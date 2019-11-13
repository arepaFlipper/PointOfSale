import { auxAddToCart } from './auxReducers';

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
        cart: auxAddToCart(state.cart.slice(), action.payload)
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
    case 'ADD_NEW_PRODUCT':
      return{
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
  
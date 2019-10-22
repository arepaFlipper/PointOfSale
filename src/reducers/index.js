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
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART':
      return{
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}

export default reducer;
  
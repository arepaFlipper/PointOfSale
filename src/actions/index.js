export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});
  
export const removeFromcart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});
  
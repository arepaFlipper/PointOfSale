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
  
export const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

export const showProductsByCategory = (payload) => ({
  type: 'VIEW_PRODUCTS_BY_CATEGORIES',
  payload,
});

export const addNewProduct = (payload) => ({
  type: 'ADD_NEW_PRODUCT',
  payload,
})

export const removeProduct = (payload) => ({
  type: 'REMOVE_PRODUCT',
  payload,
});

export const updateProduct = (payload) => ({
  type: 'UPDATE_PRODUCT',
  payload,
});

export const signupRequest = (payload) => ({
  type: 'SIGNUP_REQUEST',
  payload,
});
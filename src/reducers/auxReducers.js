const auxAddToCart = function (cart, productToCart) {
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

export { auxAddToCart };

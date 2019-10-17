import React from 'react';

//import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" >Comprar</button>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
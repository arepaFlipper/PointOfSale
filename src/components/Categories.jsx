import React from 'react';
import { connect } from 'react-redux';
import { showProductsByCategory } from '../actions';

const Categories = (props) => {
  const handleShowOnlyByCategory = (requireCategory) => {
    props.showProductsByCategory(requireCategory);
  }

  return (
    <div className="Products">
      <h2>Categories</h2>
      <div className="Products-items">
        {props.categories.map(category => (
            <button key={category.id} onClick={() => handleShowOnlyByCategory(category.id)}>
              <div className="Products-item" key={category.id}>
                  <img src={category.logo} alt={category.title} />
                  <div className="Products-item-info">
                    <h2> 
                      {category.title}
                    </h2>
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
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  showProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

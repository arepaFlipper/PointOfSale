import React from 'react';
import { connect } from 'react-redux';
import { showProductsByCategory } from '../actions';
import '../assets/styles/components/Categories.scss';

const Categories = (props) => {
  const handleShowOnlyByCategory = (requireCategory) => {
    props.showProductsByCategory(requireCategory);
  }

  return (
    <div className="Categories">
      <h2>Categories</h2>
      <div className="Categories-items">
        {props.categories.map(category => (
            <button className="Categories-item" key={category.id} onClick={() => handleShowOnlyByCategory(category.id)}>
              <div  key={category.id}>
                  <img src={category.logo} alt={category.title} />
                  <div className="Categories-item-info">
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

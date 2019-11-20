import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../assets/styles/components/coomponents/Management_prod.scss';

const ManagementCat = (props) => {
  const { categories } = props;
  return(
    <div className="Management">
      <div className="Management-top"><div></div><Link to={`/add`}><button>ADD NEW</button></Link></div>
      <section>      
      </section>
          <div className="Management-content">
              <div className="Management-item" >
                <div className="Management-element"> 
                  <div className="Management-element_id"><h3>ID</h3></div>
                  <div className="Management-element_title"><h3>Title</h3></div>
                  <div className="Management-element_container"><h3>Logo </h3> </div>
                 
                </div>
                {
                  categories.map((category) =>(
                    
                <div key={category.id} className="Management-element"> 
                    <div className="Management-element_id">{category.id}</div>
                    <div className="Management-element-title"><span><h3>{category.title}</h3></span></div>
                   
                </div>
                  )
                  )
                }
              </div>
              
          </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    categories: state.categories,
    productsByCategory: state.productsByCategory,
  };
};

export default connect(mapStateToProps,null)(ManagementCat);

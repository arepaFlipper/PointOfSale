// import Home from '../containers/Spa';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
// import Register from '../containers/Signup';
// import Checkout from '../containers/canvas/Checkout';
// import Dashboard from '../containers/canvas/Dashboard';
// import ManagementProd from '../containers/canvas/Management_prod';
// import AddProduct from '../containers/canvas/AddProduct';
// import UpdateProduct from '../containers/canvas/UpdateProduct';
// import ManagementCat from '../containers/canvas/Management_cat';

const serverRoutes = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  // {
  //   path: '/register',
  //   component: Register,
  //   exact: true,
  // },
  // {
  //   path: '/checkout',
  //   component: Checkout,
  //   exact: true,
  // },
  // {
  //   path: '/spa',
  //   component: Dashboard,
  //   exact: true,
  // },
  // {
  //   path: '/products',
  //   component: ManagementProd,
  //   exact: true,
  // },
  // {
  //   path: '/cat',
  //   component: ManagementCat,
  //   exact: true,
  // },
  // {
  //   path: '/add',
  //   component: AddProduct,
  //   exact: true,
  // },
  // {
  //   path: '/edit',
  //   component: UpdateProduct,
  //   exact: true,
  // },
  {
    path: 'NotFound',
    component: NotFound,
  }
];

export default serverRoutes;
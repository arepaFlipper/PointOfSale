import Home from '../containers/Spa';
import Login from '../containers/Login';
import Register from '../containers/Signup';
import NotFound from '../containers/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: 'NotFound',
    component: NotFound,
  }
];

export default serverRoutes;
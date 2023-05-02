import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { createBrowserRouter, RouterProvider}  from 'react-router-dom';
import { Header } from './common-components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter ([
  {
    path: '/detalhes/:id',
    element: <Details></Details>,
  },

  {
    path: '/',
    element: <Search></Search>,
  },

  {
    path: '*',
    element: <NotFound></NotFound>,
  },
  
]);

export function App() {
  return (
    <>
    <Header/>
    <NormalizeStyles/>;
    <RouterProvider router={router}/>;
    </>
  );
}

import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { createBrowserRouter, RouterProvider}  from 'react-router-dom';
import { Header } from './common-components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {configure} from 'axios-hooks';

// configure({ baseURL: process.env.REACT_APP_LAST_FM_API_BASE_URL });

const router = createBrowserRouter ([
  {
    path: '/details/:id',
    element: <Details></Details>,
  },

  {
    path: '/search',
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

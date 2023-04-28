import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { createBrowserRouter, RouterProvider}  from 'react-router-dom';

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
    <NormalizeStyles/>;
    <RouterProvider router={router}/>;
    </>
  );
}

import React, { Component } from 'react';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { createBrowserRouter, RouterProvider}  from 'react-router-dom';
import { Header } from './common-components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {configure} from 'axios-hooks';
import { Footer } from './common-components/Footer/Footer';



axios.defaults.headers.common ['X-RapidAPI-Key'] = '484fd08efemsh75925b398a33218p1d0715jsn7fafad11d5f1';
axios.defaults.headers.common['X-RapidAPI-Host'] = 'deezerdevs-deezer.p.rapidapi.com';

const router = createBrowserRouter ([
  {
    path: '/details/:id',
    element: <Details></Details>,
  },

  {
    path: '/search',
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
    <Footer></Footer>
    </>
  );
}

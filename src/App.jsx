import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './page/Home';
import Product from './page/Product';
import SignUp from './component/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut/>} >
      <Route index element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/sign/up' element={<SignUp />} />
    </Route>
  )
);

const App = () => {
  return (
   
    <RouterProvider router={router} />
  )
}

export default App
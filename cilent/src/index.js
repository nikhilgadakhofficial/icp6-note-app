import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Views/Home/Home';
import NewNotes from './Views/NewNotes/NewNotes';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/new",
    element : <NewNotes/>
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={router}/>);



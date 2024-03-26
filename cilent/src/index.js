import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Views/Home/Home';
import NewNotes from './Views/NewNotes/NewNotes';
import {Toaster} from 'react-hot-toast'
import UpdataedNote from './Views/Home/UpdataedNote/UpdataedNote';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/new",
    element : <NewNotes/>
  },
  {
    path : "/update/:id",
    element : <UpdataedNote/>
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <Toaster/>
<RouterProvider router={router}/>
</>);



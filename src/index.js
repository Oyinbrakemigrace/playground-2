import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import routes from './constants';
import axios from 'axios';
import AppContextProvider from './context/AppContext';

axios.defaults.baseURL = "https://dummy.restapiexample.com/api/v1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>
        <App />
    </RouterProvider>
  </React.StrictMode>
);



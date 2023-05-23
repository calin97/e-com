import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './Components/welcomePage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import { Toaster } from 'react-hot-toast';
import DashBoard from './Components/DashBoard';


const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/products', element: <DashBoard /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

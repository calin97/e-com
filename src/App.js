import { Outlet, useNavigate } from 'react-router-dom';
import WelcomePage from './Components/welcomePage';
import { useState } from 'react';
import CartProvider from './Context/CartProvider';

function App() {




  return (
    <>

      <Outlet />
      <WelcomePage />
    </>
  );
}

export default App;

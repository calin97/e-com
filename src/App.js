import { Outlet, useNavigate } from 'react-router-dom';
import WelcomePage from './Components/welcomePage';

function App() {




  return (
    <>

      <Outlet />
      <WelcomePage />
    </>
  );
}

export default App;

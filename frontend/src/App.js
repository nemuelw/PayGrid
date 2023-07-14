import ALogIn from "./pages/ALogIn";
import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Inquire from './pages/Inquire';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="login" element={ <LogIn/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="inquire" element={ <Inquire /> } />
        <Route path="admin" element={ <ALogIn/> } />
      </Routes>
    </div>
  );
}

export default App;

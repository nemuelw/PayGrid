import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="login" element={ <LogIn/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;

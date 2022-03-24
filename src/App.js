import logo from './logo.svg';
import 'bulma/css/bulma.min.css';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
  <div>
    <Routes> 
      <Route index path="" element={<Home/>} />
      <Route path="/about/" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;

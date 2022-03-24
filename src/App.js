import 'bulma/css/bulma.min.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
  <div>
    <Routes> 
      <Route index path="" element={<Home/>} />
      <Route path="/about/" element={<About />} />
      <Route path="/projects/" element={<Projects />} />
      <Route path="/contact/" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;

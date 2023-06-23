import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Contactus from './component/Contactus/Contactus'
import  Projects from './projects/Projects'
import About from './component/About/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import NavbarBootstrap from './components/NavbarBootstrap';


function App() {
 
  return (   
    <>
    
    <BrowserRouter>
    <NavbarBootstrap />
    <h1> React Routing</h1>
    <Navbar />
   
    
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element = {<About />} />
      <Route path ="/contact" element = { <Contact />} />
      <Route path="*" element ={ <NotFound />} />
    </Routes>
    
    </BrowserRouter>
    </>
     
  );
}

export default App;

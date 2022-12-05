import './App.css';
import { BrowserRouter, Routes, Route , Link, useNavigate , NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Coffee from './components/Coffee';
import Tea from './components/Tea';
import Locations from './components/Locations';
import NavBar from './components/NavBar';
import UserState from './context/UserState';
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
     navigate("/products")
  },[]);

  return (
    <UserState>
       <NavBar />
       <Routes>
          <Route path ="/" element = { <Home /> } />
          <Route path ="products" element = { <Products />}  >
            <Route path ="tea" element = { <Tea />  } />
            <Route path ="coffee" element = {  <Coffee />  } />  
            <Route path ="*" element = {  <h3> product not found  </h3>  } />  
          </Route >
          <Route path ="*" element = {  <h3> page not found  </h3>  } /> 
          <Route path="locations" element = {<Locations />} />   
          <Route path="locations/:name" element = {<Locations />} />
       </Routes>
    </UserState>
  );
}

export default App;

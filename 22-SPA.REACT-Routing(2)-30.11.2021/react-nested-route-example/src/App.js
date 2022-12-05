import './App.css';
import { BrowserRouter, Routes, Route , Link, useNavigate , NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Coffee from './components/Coffee';
import Tea from './components/Tea';
import Locations from './components/Locations';
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
     navigate("/products")
  },[]);

  return (
    <>
    <ul>
   
       <li> <NavLink to ="/" >Home</NavLink> </li>
       <li> <NavLink to ="products" >Products</NavLink> </li>
       <li> <NavLink to ="locations/berlin" >Berlin</NavLink> </li>
       <li> <NavLink to ="locations/hamburg" >Hamburg</NavLink> </li>
       {/* <li> <Link to ="products/tea" >Tea</Link> </li>
       <li> <Link to ="products/coffee" >Coffee</Link> </li>
       <li> <Link to ="products/chocolate" >chocolate</Link> </li> */}
    </ul>  
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
    </>
  );
}

export default App;

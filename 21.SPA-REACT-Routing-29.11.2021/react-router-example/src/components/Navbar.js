import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <ul>
         <li><Link to="/about" >about page</Link> </li>   
         <li><Link to="/" >Home page</Link></li>   
         <li><Link to="/contact" >contact page</Link></li>   
         <li><Link to="/impressum" >impressum page</Link></li>   
        </ul>
    )
}

export default Navbar

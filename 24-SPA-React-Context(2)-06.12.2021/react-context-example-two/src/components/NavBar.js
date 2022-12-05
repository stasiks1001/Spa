import React , {useContext ,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
// import UserContext, useContext
import UserContext from '../context/UserContext';

function NavBar() {
    const { state, loadUser, logout } = useContext(UserContext)
    useEffect(()=>{
        loadUser();
    },[])
    console.log(state);

    const guestLinks = <>
    <li> <NavLink to ="/login" >Login</NavLink> </li>
    <li> <NavLink to ="/register" >Register</NavLink> </li>
   </>
    const userLinks = <>
    <li> <NavLink to ="/dashboard" >Dashboard</NavLink> </li>
    <li> <NavLink to ="/" onClick = {logout} >Logout</NavLink> </li>
   </>
    return (
        <ul>
            
        <li> <NavLink to ="/" >Home</NavLink> </li>
        <li> <NavLink to ="products" >Products</NavLink> </li>
        <li> <NavLink to ="locations/berlin" >Berlin</NavLink> </li>
        <li> <NavLink to ="locations/hamburg" >Hamburg</NavLink> </li>
        {/* <li> <Link to ="products/tea" >Tea</Link> </li>
        <li> <Link to ="products/coffee" >Coffee</Link> </li>
        <li> <Link to ="products/chocolate" >chocolate</Link> </li> */}
        { !state.isAuthenticated ?   guestLinks : userLinks          }   
     </ul>  
    )
}

export default NavBar

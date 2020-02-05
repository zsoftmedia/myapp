import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar=()=>{
    return(
    <div className="">
   <nav>
       <h1>Logo</h1>
       <ul className="nav-links">
       <Link to="/" className="links"><li>Home</li></Link>
       <Link to ="/about" className="links"><li>About Us</li></Link>
       <Link to="/contact" className="links"><li>Contact Us</li></Link>
         
       </ul>
   </nav>
   </div>
    )};
export default NavBar;
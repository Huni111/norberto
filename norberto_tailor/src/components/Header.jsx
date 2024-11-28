import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return(
    <>
    <nav>
        <h1>HEADER</h1>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    </>
    )
}
export default Header;
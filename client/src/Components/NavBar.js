import React from "react";
import {NavLink} from 'react-router-dom';

function NavBar () {
    return(
        <div className="NavBar">
            <NavLink to="/"><p>Home</p></NavLink>
            <NavLink to="/ProductPage"><p>Products</p></NavLink>
        </div>
    )
}

export default NavBar;
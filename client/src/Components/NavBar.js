import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import CartModal from "./CartModal";

function NavBar () {
    const [loginModal, setLoginModal] = useState();
    const [cartModal, setCartModal] = useState();

    const login = () => {
        setLoginModal(<LoginModal rerender={setLoginModal}/>);
    }

    const cart = () => {
        setCartModal(<CartModal rerender={setCartModal}/>);
    }

    return(
        <div className="NavBar">
            {cartModal}
            {loginModal}
            <div className="NavItems">
                <NavLink to="/"> <p className="nav-home">Home</p> </NavLink>
                <NavLink to="/ProductPage"> <p className="nav-Products">Products</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="shopping-bag" onClick={cart}></div>
            <div className="user-img" onClick={login}></div>
            <p className="login" onClick={login}>Login</p>
        </div>
    )
}

export default NavBar;
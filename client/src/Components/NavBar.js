import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import LoginModal from '../Components/LoginModal';
import Logout from "./SubComponents/Logout";
import CartModal from "./CartModal";

function NavBar () {
    const [loginModal, setLoginModal] = useState();
    const [logoutModal, setLogoutModal] = useState();
    const [cartModal, setCartModal] = useState();
    let activeUser = sessionStorage.getItem('name');

    const login = () => {
        if(!activeUser){
            setLoginModal(<LoginModal rerender={setLoginModal}/>);
        } else {
            setLogoutModal(<Logout rerender={setLogoutModal}/>);
        }
    }

    const cart = () => {
        setCartModal(<CartModal rerender={setCartModal}/>);
    }

    return(
        <div className="NavBar">
            {cartModal}
            {loginModal}
            {logoutModal}
            <div className="NavItems">
                <NavLink to="/"> <p className="nav-home">Home</p> </NavLink>
                <NavLink to="/ProductPage"> <p className="nav-Products">Products</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="shopping-bag" onClick={cart}></div>
            <div className="user-img" onClick={login}></div>
            <p className="username">{activeUser}</p>
        </div>
    )
}

export default NavBar;
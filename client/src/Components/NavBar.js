import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import LoginModal from '../components/LoginModal';

function NavBar () {
    const [loginModal, setLoginModal] = useState();

    const login = () => {
        setLoginModal(<LoginModal rerender={setLoginModal}/>);
    }

    return(
        <div className="NavBar">
            {loginModal}
            <div className="NavItems">
                <NavLink to="/"> <p className="nav-home">Home</p> </NavLink>
                <NavLink to="/ProductPage"> <p className="nav-Products">Products</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="shopping-bag"></div>
            <div className="user-img" onClick={login}></div>
            <p className="login" onClick={login}>Login</p>
        </div>
    )
}

export default NavBar;
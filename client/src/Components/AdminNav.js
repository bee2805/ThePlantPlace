import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import LoginModal from '../Components/LoginModal';
import RegisterModal from "./Register";
import CartModal from "./CartModal";

function AdminNav () {
    const [loginModal, setLoginModal] = useState();
    const [registerModal, setRegisterModal] = useState();
    const [cartModal, setCartModal] = useState();

    const login = () => {
        setLoginModal(<LoginModal rerender={setLoginModal}/>);
    }

    const register = () => {
        setRegisterModal(<RegisterModal rerender={setRegisterModal}/>);
    }

    const cart = () => {
        setCartModal(<CartModal rerender={setCartModal}/>);
    }

    return(
        <div className="NavBar">
            {cartModal}
            {loginModal}
            {registerModal}
            <div className="NavItems">
                <NavLink to="/InventoryManagement"> <p>Inventory</p> </NavLink>
                <NavLink to="/IncomingOrders"> <p>Orders</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="shopping-bag" onClick={cart}></div>
            <div className="user-img" onClick={login}></div>
            <p className="login" onClick={register}>register</p>
        </div>
    )
}

export default AdminNav;
import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import LoginModal from '../Components/LoginModal';
import Logout from "./SubComponents/Logout";

function AdminNav () {
    const [loginModal, setLoginModal] = useState();
    const [logoutModal, setLogoutModal] = useState();
    let activeUser = sessionStorage.getItem('name');

    const login = () => {
        if(!activeUser){
            setLoginModal(<LoginModal rerender={setLoginModal}/>);
        } else {
            setLogoutModal(<Logout rerender={setLogoutModal}/>);
        }
    }

    return(
        <div className="NavBar">
            {loginModal}
            {logoutModal}
            <div className="NavItems">
                <NavLink to="/InventoryManagement"> <p>Inventory</p> </NavLink>
                <NavLink to="/IncomingOrders"> <p>Orders</p> </NavLink>
            </div>

            <div className="logo"></div>

            <div className="user-img" onClick={login}></div>
            <p className="username">{activeUser}</p>
        </div>
    )
}

export default AdminNav;
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout (props) {

    let navigate = useNavigate()

    const logout = () => {
        props.rerender();
        sessionStorage.clear();
        navigate('/')
    }

    const closeModal = () =>{
        props.rerender();
    }

    return(
        <>
        <div className="Logout">
            <div className="closeModal" onClick={closeModal}></div>
            <h2>Do you want to Log Out?</h2>
            <button onClick={logout}>Logout</button>
        </div>
        </>
    )
}

export default Logout;
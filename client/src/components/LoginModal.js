import React from "react";

function LoginModal (props) {

    const closeModal = () =>{
        props.rerender();
    }

    return(
        <div className="LoginModal">
            <form>
                <div className="closeModal" onClick={closeModal}></div>
                <h2>Welcome Back!</h2>
                <input placeholder="Email" type="text"/>
                <input placeholder="Password" type="password"/>
                <br/>
                <button>Login!</button>
            </form>
        </div>
    )
}

export default LoginModal;
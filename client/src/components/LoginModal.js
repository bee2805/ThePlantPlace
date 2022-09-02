import React, { useState } from "react";
import axios from 'axios';

function LoginModal (props) {

    const [userValues, setUserValues] = useState();

    const closeModal = () =>{
        props.rerender();
    }

    const userInputs = (e) => {
        const {name, value} = e.target;
        setUserValues({...userValues, [name]: value});
    }

    const submit = (e) => {
        e.preventDefault()
        console.table(userValues);
    }

    return(
        <>
        <div className="LoginModal">
            <form>
                <div className="closeModal" onClick={closeModal}></div>
                <h2>Welcome Back!</h2>
                <input name="email" placeholder="Email" type="text" onChange={userInputs}/>
                <input name="password" placeholder="Password" type="password" onChange={userInputs}/>
                <br/>
                <button onClick={submit}>Login!</button>
            </form>
        </div>
        </>
    )
}

export default LoginModal;
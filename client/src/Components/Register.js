import React from "react";
import { useRef } from "react";
import axios from 'axios';

function RegisterModal (props) {

    const closeModal = () =>{
        props.rerender();
    }

    const name = useRef(),
    email = useRef(),
    password = useRef()

    const addUser = () => {

        let payload = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        axios.post('http://localhost:5000/api/addUser', payload)
        alert('user was added!')
        props.rerender();
    }

    return(
        <div className="RegisterModal">
            <form>
                <div className="closeModal" onClick={closeModal}></div>
                <h2>Register Now!</h2>
                <input ref={name} placeholder="Name and Surname" type="text"/>
                <input ref={email} placeholder="Email" type="text"/>
                <input ref={password} placeholder="Password" type="password"/>
                <br/>
                <button onClick={addUser}>Register!</button>
            </form>
        </div>
    )
}

export default RegisterModal;
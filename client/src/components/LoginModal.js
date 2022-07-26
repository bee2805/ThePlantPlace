import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginModal (props) {
    const navigate = useNavigate();
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
        
        let payload = {
            email: userValues['email'],
            password: userValues['password']
        }

        axios.post('http://localhost:5000/api/loginUser', payload)
        .then((res) => {
            if(res.data.user){
                sessionStorage.setItem('name', res.data.name)
                sessionStorage.setItem('status', res.data.status)
                const admin = sessionStorage.getItem('status');

                if (admin === 'Admin') {
                    navigate('/InventoryManagement')
                } else if (admin === '' || admin === null || admin === undefined|| admin === false) {
                    closeModal()
                }
            } else {
                alert("User not found");
            }
        })
        .catch(function(error){
            console.log(error)
        })
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
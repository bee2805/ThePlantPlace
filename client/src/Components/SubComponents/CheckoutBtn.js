import React from "react";
import axios from 'axios';

function CheckoutBtn () {

    const checkout = () => {
        let order = JSON.parse(sessionStorage.getItem('cart'));
        let user = sessionStorage.getItem('name');

        let payload = {
            clientName: user,
            quantity: order[0].qty,
            price: order[0].price
        }
        axios.post('http://localhost:5000/api/addOrder', payload)

        alert('Thank you for your purchase!')
        sessionStorage.removeItem('cart');
    }

    return(
        <>
            <button onClick={checkout}>CHECKOUT</button>
        </>
    )
}

export default CheckoutBtn;
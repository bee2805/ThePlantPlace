import React from "react";
import CartItem from "./CartItem";

function CartModal (props) {

    const closeModal = () =>{
        props.rerender();
    }

    return(
        <div className="CartModal">
            <div className="closeModal" onClick={closeModal}></div>
            <div className="shopping-bag"></div>
            <h2>Your Cart</h2>

            <p className="itemNo">You've added 1 item</p>

            {<CartItem/>}

            <button>CHECKOUT</button>

        </div>
    )
}

export default CartModal;
import React, { useState } from "react";

function CartItem (props) {


    return(
        <>
        {/* cart Item */}
        <div className="cartItem">
            <div className="itemImg"></div>
            <div className="itemInfo">
                <p>{props.name}</p>
                <p className="price">R{props.price}</p>
                <p>{props.qty}</p>
                <p className="removeItem">Remove Item</p>
            </div>
        </div> {/* cart Item */}
        </>
    )
}

export default CartItem;
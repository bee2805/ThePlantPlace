import React from "react";

function CartItem (props) {
    return(
        <>
        {/* cart Item */}
        <div className="cartItem">
            <div className="itemImg"></div>
            <div className="itemInfo">
                <p>Monstera</p>
                <p className="price">R150</p>
                <p>Quantity</p>
                <p className="removeItem">Remove Item</p>
            </div>
        </div> {/* cart Item */}
        </>
    )
}

export default CartItem;
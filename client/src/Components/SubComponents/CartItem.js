import React from "react";

function CartItem (props) {

    const removeItem = () => {
        props.rerender()
        sessionStorage.removeItem('cart');
    }

    return(
        <>
        {/* cart Item */}
        <div className="cartItem">
            <div className="itemImg"></div>
            <div className="itemInfo">
                <p>{props.name}</p>
                <p className="price">R{props.price}</p>
                <p>{props.qty}</p>
                <p onClick={removeItem} className="removeItem">Remove Item</p>
            </div>
        </div> {/* cart Item */}
        </>
    )
}

export default CartItem;
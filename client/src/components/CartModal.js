import React from "react";

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
            
            {/* cart Item */}
            <div className="cartItem">
                <div className="itemImg2"></div>
                <div className="itemInfo">
                    <p>Monstera Minima</p>
                    <p className="price">R150</p>
                    <p>Quantity</p>
                    <p className="removeItem">Remove Item</p>
                </div>
            </div> {/* cart Item */}

            <button>CHECKOUT</button>

        </div>
    )
}

export default CartModal;
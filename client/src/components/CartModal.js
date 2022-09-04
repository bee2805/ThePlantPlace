import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function CartModal (props) {

    let cart = JSON.parse(sessionStorage.getItem('cart'));
    const [cartItem, setCartItem] = useState();
    

    const closeModal = () =>{
        props.rerender();
    }

    
    useEffect(() => {

        if(!cart){
            console.log('there are no items in the cart')
        } else {
    
            let cartItem = cart.map(item =>(<CartItem setRender={props.setRender} name={item.name} img={item.image} price={item.price} id={item.id} qty={item.qty}/>));
    
            setCartItem(cartItem);
        }
    
    }, [props.Rerender]);

    return(
        <>
        <div className="CartModal">
            <div className="closeModal" onClick={closeModal}></div>
            <div className="shopping-bag"></div>
            <h2>Your Cart</h2>

            {cartItem}

            {/* <button onClick={checkout}>CHECKOUT</button> */}

        </div>
        </>
    )
}

export default CartModal;
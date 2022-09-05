import React, { useState, useEffect } from "react";
import CartItem from "./SubComponents/CartItem";
import CheckoutBtn from './SubComponents/CheckoutBtn'
import EmptyCart from "./SubComponents/EmptyCart";

function CartModal (props) {

    let cart = JSON.parse(sessionStorage.getItem('cart'));
    const [cartItem, setCartItem] = useState();
    const [emptyCart, setEmptyCart] = useState();
    const [checkoutBtn, setCheckoutBtn] = useState();
    
    const closeModal = () =>{
        props.rerender();
    }

    useEffect(() => {

        if(cart === '' || cart === undefined || cart === null){
            setEmptyCart(<EmptyCart/>);
        } else {
            let cartItem = cart.map(item =>(<CartItem key={item.id} rerender={setCartItem} name={item.name} img={item.image} price={item.price} id={item.id} qty={item.qty}/>));
            setCartItem(cartItem);

            setCheckoutBtn(<CheckoutBtn/>)
        }
    
    }, [props.Rerender]);

    return(
        <>
        <div className="CartModal">
            <div className="closeModal" onClick={closeModal}></div>
            <div className="shopping-bag"></div>
            <h2>Your Cart</h2>
            {emptyCart}
            {cartItem}

            {checkoutBtn}
        </div>
        </>
    )
}

export default CartModal;
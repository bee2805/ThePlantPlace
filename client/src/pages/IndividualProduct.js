import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import NavBar from '../Components/NavBar';
import CartItem from '../Components/CartItem';
import LoginModal from '../Components/LoginModal';
import CartModal from '../Components/CartModal';

function IndividualProduct () {

    let productId = sessionStorage.getItem('productId');
    console.log(productId)

    let navigate = useNavigate();

    const quantity = useRef();

    const [renderCartItem, setRenderCartItem] = useState();
    const [loginModal, setLoginModal] = useState();
    const [cartModal, setCartModal] = useState();

    const [ productData, setProductData] = useState({
        productName: "",
        price: "",
        productDescription: "",
        // date: { type: Date, default: Date.now },
        stock: "",
        pot1: "", 
        pot2: "", 
        pot3: "",
        pot4: ""
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/oneProduct/' + productId)
        .then(res => {
            let data = res.data;
            setProductData({
                productName: data.productName,
                price: data.price,
                productDescription: data.productDescription,
                // date: { type: Date, default: Date.now },
                stock: data.stock,
                pot1: data.variations.pot1, 
                pot2: data.variations.pot2, 
                pot3: data.variations.pot3,
                pot4: data.variations.pot4
            })
        });
    },[]);

    const back = () => {
        sessionStorage.clear('productId');
        navigate("/ProductPage");
    }

    const addToCart = () => {
        if(sessionStorage.getItem('username') === ""){
            setLoginModal(<LoginModal rerender={setLoginModal}/>);
        } else {
            setCartModal(<CartModal rerender={setCartModal}/>);
        }
    }

    return(
        <>
        {loginModal}
        {cartModal}
        <NavBar/>
        <div className="IndividualProduct">
            <div className="back" onClick={back}></div>
            <div className="productImage"></div>
            <div className="productInfo">
                <h1>{productData.productName}</h1>
                <p>{productData.productDescription}</p>

                <h2 className="potHeading">Select your pot</h2>
                <div className="potVariations">
                    <div className="pot1" tabIndex="1"></div>
                    <div className="pot2" tabIndex="2"></div>
                    <div className="pot3" tabIndex="3"></div>
                    <div className="pot4" tabIndex="4"></div>
                </div>

                <div className="additionalInfo">
                    <h2><strong>R</strong>{productData.price}</h2>
                    <input type="number" placeholder="qty" ref={quantity}/>
                    <button onClick={addToCart}>+ Add to Cart</button>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className='footer'>
            <p>ThePlantPlace©2022</p>
            <a href="tel:123-456-7890"><div className='call'></div></a>
            <a href="mailto: ThePlantPlace@gmail.com"><div className='mail'></div></a>
            <a href="https://instagram.com"><div className='instagram'></div></a>
        </div>
        </>
    )
}

export default IndividualProduct;
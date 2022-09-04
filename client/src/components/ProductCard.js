import React from "react";
import monstera from "../assets/monstera.jpg";
import {useNavigate} from "react-router-dom";

function ProductCard (props) {

    const navigate = useNavigate()

    const viewProduct = () => {
        sessionStorage.setItem('productId', props.productId);
        navigate('/IndividualProduct');
    }

    return(
        <>
            <div className="productCard" onClick={viewProduct}>
                <img src={props.image}/>
                <div className="cardInfo">
                    <h2 className="productName">{props.productName}</h2>
                    <p><strong>R </strong>{props.price}</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
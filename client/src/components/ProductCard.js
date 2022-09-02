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
                <img src={monstera} alt="img"/>
                <div className="cardInfo">
                    <p className="productName">{props.productName}</p>
                    <p><strong>R </strong>{props.price}</p>
                </div>
                <div className="prodCart"></div>
            </div>
        </>
    );
}

export default ProductCard;
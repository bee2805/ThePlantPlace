import React from "react";
import monstera from "../assets/monstera.jpg";

function ProductCard () {
    return(
        <div className="productCard">
            <img src={monstera} alt="img"/>
            <div className="productInfo">
                <h3>Product Name</h3>
                <p>R150</p>
            </div>
        </div>
    );
}

export default ProductCard;
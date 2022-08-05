import React from "react";
import monstera from "../assets/monstera.jpg";

function ProductCard () {
    return(
        <>
            <a href="/IndividualProduct">
                <div className="productCard">
                    <img src={monstera} alt="img"/>
                    <div className="cardInfo">
                        <p className="productName">Product Name</p>
                        <p>R150</p>
                    </div>
                    <div className="prodCart"></div>
                </div>
            </a>
        </>
    );
}

export default ProductCard;
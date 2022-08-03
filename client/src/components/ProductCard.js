import React from "react";
import monstera from "../assets/monstera.jpg";

function ProductCard () {
    return(
        <>
            <a href="/IndividualProduct">
                <div className="productCard">
                    <img src={monstera} alt="img"/>
                    <div className="productInfo">
                        <h3>Product Name</h3>
                        <p>R150</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default ProductCard;
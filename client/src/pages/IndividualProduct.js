import React from "react";

function IndividualProduct () {
    return(
        <div className="IndividualProduct">
            <a href="/ProductPage"><div className="back"></div></a>
            <div className="productImage"></div>
            <div className="productInfo">
                <h1>Scindapsus Pictus</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                <h2 className="potHeading">Select your pot</h2>
                <div className="potVariations">
                    <div className="pot1"></div>
                    <div className="pot2"></div>
                    <div className="pot3"></div>
                    <div className="pot4"></div>
                </div>

                <div className="additionalInfo">
                    <h2>R150</h2>
                    <input type="number" placeholder="qty"/>
                    <button>+ Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default IndividualProduct;
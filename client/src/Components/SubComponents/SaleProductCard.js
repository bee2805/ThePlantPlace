import React from "react";

function SaleProductCard (props) {

    return(
        <>
            <p className="currentPrice"><strong> R{props.price - (props.price/100*props.discount)}</strong></p>
            <p className="prevPrice">R{props.price}</p>
            <div className="discountPercentage"><p>-{props.discount}%</p></div>
        </>
    )
}

export default SaleProductCard;
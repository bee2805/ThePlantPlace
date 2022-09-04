import React from "react";

function NoSaleProductCard (props) {

    return(
        <>
            <p className="currentPrice"><strong>R{props.price}</strong></p>
        </>
    )
}

export default NoSaleProductCard;
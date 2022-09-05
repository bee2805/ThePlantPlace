import React from "react";

function SaleProductPage (props) {

    return(
        <>
            <h2><strong>R</strong>{props.price - (props.price/100*props.discount)}</h2>
            <p className="prevPrice">R{props.price}</p>
        </>
    )
}

export default SaleProductPage;
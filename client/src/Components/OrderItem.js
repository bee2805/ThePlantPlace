import React from "react";
import axios from 'axios';

function OrderItem (props) {

    const dispatchOrder = () => {
        console.log(props.orderId)

        if(window.confirm(`Are you sure yoy want to dispatch ${props.clientName}'s order?`) === true){
            axios.delete('http://localhost:5000/api/dispatchOrder/' + props.orderId)
            .then(res => {
                props.editRender(true);
                alert('Order Dispatched!')
            })
            .catch(function(err) {console.log(err)});
        }
    }

    return(
        <>
            <div className='orderItem'>
                <p><strong>{props.clientName}</strong></p>
                <p><strong>qty: </strong>{props.quantity}</p>
                <p>{props.date}</p>
                <p><strong>R</strong>{props.price}</p>
                <button onClick={dispatchOrder}>Dispatch</button>
            </div>
        </>
    )
}

export default OrderItem;
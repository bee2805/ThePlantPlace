import React, { useState, useEffect } from 'react';
import AdminNav from '../Components/AdminNav';
import OrderItem from '../Components/OrderItem';
import axios from 'axios';

function IncomingOrders () {

    const [renderOrders, setRenderOrders] = useState(false);
    const [orders, setOrders] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/api/allOrders')
        .then(res => {
            let data = res.data;
            // console.table(data)
            let renderOrders = data.map((item) => <OrderItem
                key={item._id}
                orderId={item._id}
                date={item.date}
                clientName={item.clientName}
                quantity={item.quantity}
                price={item.price}
                editRender={setRenderOrders}
            />)

            setOrders(renderOrders);
            setRenderOrders(false);
        })
        .catch(err => console.log(err));
    }, [renderOrders])

    return(
        <>
        <AdminNav/>
        <div className="IncomingOrders">
            <h1>Incoming Orders</h1>

            <div className='orders'>
                {orders}
            </div>
            
        </div>
        </>
    )
}

export default IncomingOrders;
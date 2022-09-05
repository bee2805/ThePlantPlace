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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='orders'>
                {orders}
            </div>
            
        </div>
        </>
    )
}

export default IncomingOrders;
import React from 'react';
import MonsteraMinima from "../assets/MonsteraMinima.jpg";
import monstera from "../assets/monstera.jpg";
import ScindapsusPictus from "../assets/ScindapsusPictus.jpg";

function IncomingOrders () {
    return(
        <>
        <div className="IncomingOrders">
            <h1>Incoming Orders</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='tableHeadings'>
                <p>Image</p>
                <p>Order Number</p>
                <p>Client Name</p>
                <p>Price</p>
                <p>Complete Order</p>
            </div>

            
            <div className='orderItem'>
                <img src={MonsteraMinima}/>
                <p>#21335</p>
                <p>Rick Sanchez</p>
                <p>R340</p>
                <button>Dispatch</button>
            </div>

            <div className='orderItem'>
                <img src={monstera}/>
                <p>#21336</p>
                <p>Lady Elsworth</p>
                <p>R1000</p>
                <button>Dispatch</button>
            </div>

            <div className='orderItem'>
                <img src={ScindapsusPictus}/>
                <p>#21337</p>
                <p>Tim Burton</p>
                <p>R510</p>
                <button>Dispatch</button>
            </div>
            
            
        </div>
        {/* footer */}
        <div className='footer'>
                <p>ThePlantPlace©2022</p>
                <a href="tel:123-456-7890"><div className='call'></div></a>
                <a href="mailto: ThePlantPlace@gmail.com"><div className='mail'></div></a>
                <a href="https://instagram.com"><div className='instagram'></div></a>
            </div>
        </>
    )
}

export default IncomingOrders;
import React from 'react';
import ProductCard from '../components/ProductCard';

function InventoryManagement () {
    return(
        <>
        <div className="InventoryManagement">
            <h1>Manaage Inventory</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='products'>
                <a><div className='addItem'>
                    <h1>+ Add <br/>new product</h1>
                </div></a>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
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

export default InventoryManagement;
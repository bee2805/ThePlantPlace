import React from 'react';
import ProductCard from '../components/ProductCard';

function InventoryManagement () {
    return(
        <div className="InventoryManagement">
            <h1>Manaage Inventory</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='addItem'>
                <h2>+ Add a new Product</h2>
            </div>

            <ProductCard/>
            
            
        </div>
    )
}

export default InventoryManagement;
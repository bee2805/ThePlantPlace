import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import EditProductCard from '../Components/EditProductCard';

function InventoryManagement () {

    const productName = useRef(),
    productDescription = useRef(),
    price = useRef(),
    stock = useRef(),
    pot1 = useRef(),
    pot2 = useRef(),
    pot3 = useRef(),
    pot4 = useRef()

    const [products, setProducts] = useState();
    const [renderProducts, setRenderProducts] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/allProducts')
        .then(res => {
            let productData = res.data;
            console.log(productData)
            let renderProducts = productData.map((item) => <EditProductCard
                key={item._id} 
                productId={item._id}
                productName={item.productName} 
                productDescription={item.productDescription}
                price={item.price}
                stock={item.variations.stock}
                pot1={item.variations.pot1}
                pot2={item.variations.pot2}
                pot3={item.variations.pot3}
                pot4={item.variations.pot4}
                editRender={setRenderProducts}
            />)

            setProducts(renderProducts);
            setRenderProducts(false);
        })
        .catch(err => console.log(err));
    }, [renderProducts])

    const addProduct = () => {
        let stock = pot1.current.value + pot2.current.value + pot3.current.value;

        let payload = {
            productName: productName.current.value,
            price: price.current.value,
            productDescription: productDescription.current.value,
            // date: { type: Date, default: Date.now },
            stock: stock,
            variations: {
                pot1: +pot1.current.value, 
                pot2: +pot2.current.value, 
                pot3: +pot3.current.value,
                pot4: +pot4.current.value
            }
        }

        axios.post('http://localhost:5000/api/newProduct', payload)
        setRenderProducts(true)

        document.getElementById('productName').value = "";
        document.getElementById('productDescription').value = "";
        document.getElementById('price').value = "";
        document.getElementById('pot1').value = "";
        document.getElementById('pot2').value = "";
        document.getElementById('pot3').value = "";
        document.getElementById('pot4').value = "";
    }

    return(
        <>
        <div className="InventoryManagement">
            <div className='products overflow'>
                {products}
            </div>
        </div>

        <div className="AddProduct">
            <h2>Add a product!</h2>
            <input id="productName" placeholder="Product Name..." type="text" ref={productName}/>
            <input id="price" placeholder="Price" type="number" ref={price}/>

            <br/>

            <label>Pot One</label>
            <input className='qty' id="pot1" placeholder="qty" type="number" ref={pot1}/>
            <br/>

            <label>Pot Two</label>
            <input className='qty' id="pot2" placeholder="qty" type="number" ref={pot2}/>
            <br/>

            <label>Pot Three</label>
            <input className='qty' id="pot3" placeholder="qty" type="number" ref={pot3}/>
            <br/>

            <label>Pot Four</label>
            <input className='qty' id="pot4" placeholder="qty" type="number" ref={pot4}/>
            <br/>

            <textarea id="productDescription" placeholder="Product Description..." ref={productDescription}/>

            <br/>
            <button onClick={addProduct}>Add Product!</button>
        </div>
        </>
    )
}

export default InventoryManagement;
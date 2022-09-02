import React from "react";
import { useState } from "react";
import axios from 'axios';

function EditProduct (props) {

    const closeModal = () =>{
        props.rerender();
    }

    let editFormValues = {
        productName: props.productName,
        price: props.price,
        productDescription: props.productDescription,
        // date: { type: Date, default: Date.now },
        stock: props.stock,
        pot1: props.pot1, 
        pot2: props.pot2, 
        pot3: props.pot3,
        pot4: props.pot4
    }

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) => {
        const {name, value} = e.target;
        setEditValues({...editValues, [name]: value});
    }

    const updateProduct = (e) => {
        e.preventDefault()
        let productId = props.productId;

        axios.patch('http://localhost:5000/api/updateProduct/' + productId, editValues)
        .then(res => {
            if(res){
                console.log('Item Updated!');
                props.rerender();
                props.editRender(true);
            }
        })
        .catch(function(err) {console.log(err)});
    }

    return(
        <div className="EditProduct">
            <div className="closeModal" onClick={closeModal}></div>
            <h2>Edit this product!</h2>
            <input name="productName" id="productName" placeholder="Product Name..." type="text" defaultValue={props.productName} onChange={updateValues}/>
            <input name="price" id="price" placeholder={props.price} type="number" onChange={updateValues}/>
            <br/>

            <label>Pot One</label>
            <input name="pot1" className='qty' id="pot1" placeholder={props.pot1} type="number" onChange={updateValues}/>
            <br/>

            <label>Pot Two</label>
            <input name="pot2" className='qty' id="pot2" placeholder="qty" type="number" value={props.pot2} onChange={updateValues}/>
            <br/>

            <label>Pot Three</label>
            <input name="pot3" className='qty' id="pot3" placeholder="qty" type="number" value={props.pot3} onChange={updateValues}/>
            <br/>

            <label>Pot Four</label>
            <input name="pot4" className='qty' id="pot4" placeholder="qty" type="number" value={props.pot4} onChange={updateValues}/>
            <br/>

            <textarea name="productDescription" id="productDescription" placeholder="Product Description..." defaultValue={props.productDescription} onChange={updateValues}/>

            <br/>
            <button onClick={updateProduct}>Update Product!</button>
        </div>
    )
}

export default EditProduct;
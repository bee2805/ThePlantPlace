import React, { useState } from 'react';
import EditProduct from '../Components/EditProduct';
import axios from 'axios';

function EditProductCard (props) {

    const [editProductModal, setEditProductModal] = useState();

    const editProduct = () => {
        setEditProductModal(<EditProduct
            rerender={setEditProductModal}
            productId={props.productId}
            productName={props.productName}
            productDescription={props.productDescription}
            price={props.price}
            stock={props.stock}
            pot1={props.pot1}
            pot2={props.pot2}
            pot3={props.pot3}
            pot4={props.pot4}
            discount={props.discount}
            editRender={props.editRender}
        />);
    }

    const deleteProduct = () => {
        if(window.confirm("Are you sure you want to delele " + props.productName + "?") === true){
            axios.delete('http://localhost:5000/api/deleteProduct/' + props.productId)
            .then(res => {
                props.editRender(true);
                alert('Product Deleted')
            })
            .catch(function(err) {console.log(err)});
        }
    }

    return(
        <>
        {editProductModal}
        <div className="EditProductCard">
            <img src={props.image} alt="img"/>
            <div className="cardInfo">
                <p className="productName">{props.productName}</p>

                {/* https://www.flaticon.com/free-icon/trash_3096673?term=delete&page=1&position=12&page=1&position=12&related_id=3096673&origin=search */}
                <div className='options'>
                    <button onClick={editProduct}>Edit Product</button>
                    <div className='deleteItem' onClick={deleteProduct}></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default EditProductCard;
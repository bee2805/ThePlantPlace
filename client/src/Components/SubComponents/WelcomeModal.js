import React from "react";

function Welcome (props) {

    let activeUser = sessionStorage.getItem('name');
    const closeModal = () =>{
        props.rerender();
    }

    return(
        <>
        <div className="Welcome">
            <div className="closeModal" onClick={closeModal}></div>
            <h2>Welcome {activeUser}!</h2>
        </div>
        </>
    )
}

export default Welcome;
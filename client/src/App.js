import React from "react";
// Pages
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import IndividualProduct from "./Pages/IndividualProduct";
import InventoryManagement from "./Pages/InventoryManagement";
import IncomingOrders from "./Pages/IncomingOrders"
// React Routing
import {Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/ProductPage' element={<ProductPage/>}/>
        <Route path='/IndividualProduct' element={<IndividualProduct/>}/>
        <Route path='/InventoryManagement' element={<InventoryManagement/>}/>
        <Route path='/IncomingOrders' element={<IncomingOrders/>}/>
      </Routes>
    </div>
  );
}

export default App;

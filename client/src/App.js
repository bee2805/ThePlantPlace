import React from "react";
// Nav Bar
import NavBar from "./components/NavBar";
// Pages
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
// React Routing
import {Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/ProductPage' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

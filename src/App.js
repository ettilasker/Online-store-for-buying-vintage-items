import { Provider } from 'react-redux';
import './App.css';
import store from "./redux/store";
import React, { useState } from 'react';
import Navbar from './project/Navbar';
import { CartReducer } from './redux/reducers/CartReducer';
import Home from './project/Home';
import StoreItems from './project/StoreItems';
import Cart from './project/Cart';
import PaymentPage from './project/PaymentPage';
import ConfirmationPage from './project/ConfirmationPage';
import About from './project/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const userName = 'John Doe'; // Replace with the actual user name

  return (
    <>
      
        <BrowserRouter>
        <Provider store={store}>
        <Navbar cartItems={CartReducer} userName={userName} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/StoreItems" element={<StoreItems />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/ConfirmationPage" element={<ConfirmationPage />} />
            <Route exact path="/PaymentPage" element={<PaymentPage />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
          </Provider>
        </BrowserRouter>

      

    </>
  );
}

export default App;

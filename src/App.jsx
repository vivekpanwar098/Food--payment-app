import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import PaymentPage from './pages/paymentPage';
import Success from './pages/Success';
import { Routes, Route } from 'react-router-dom'; // ✅ Remove BrowserRouter
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
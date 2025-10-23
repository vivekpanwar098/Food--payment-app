import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCreditCard, FaMobileAlt, FaUniversity, FaQrcode } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';
import { IoArrowBack } from 'react-icons/io5';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { total, items, subtotal, deliveryfee, taxes } = location.state || {};
  
  const [selectedMethod, setSelectedMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  if (!total) {
    navigate('/');
    return null;
  }

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: <FaMobileAlt className="text-4xl text-purple-600" />,
      description: 'Google Pay, PhonePe, Paytm'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <FaCreditCard className="text-4xl text-green-600" />,
      description: 'Visa, Mastercard, Rupay'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: <FaUniversity className="text-4xl text-red-600" />,
      description: '50+ Banks Supported'
    },
    {
      id: 'wallet',
      name: 'Wallets',
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      description: 'Paytm, PhonePe, Mobikwik'
    },
    {
      id: 'qr',
      name: 'UPI QR Code',
      icon: <FaQrcode className="text-4xl text-orange-600" />,
      description: 'Scan & Pay'
    }
  ];

  const handlePayment = () => {
    if (!selectedMethod) {
      toast.error('Please select a payment method');
      return;
    }

    if (selectedMethod === 'upi' && !upiId) {
      toast.error('Please enter UPI ID');
      return;
    }

    if (selectedMethod === 'card') {
      if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv) {
        toast.error('Please fill all card details');
        return;
      }
    }

    toast.info('Processing payment...');
    
    setTimeout(() => {
      toast.success('🎉 Payment Successful! Order Placed');
      console.log('Payment Details:', {
        method: selectedMethod,
        amount: total,
        items: items,
        timestamp: new Date()
      });
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-400 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <IoArrowBack 
            className="text-3xl text-gray-800 cursor-pointer hover:text-gray-600"
            onClick={() => navigate('/')}
          />
          <h1 className="text-2xl font-bold text-gray-800">Payment</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Select Payment Method</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg ${
                    selectedMethod === method.id
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 hover:border-green-200'
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{method.name}</h3>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedMethod === method.id
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-300'
                    }`}>
                      {selectedMethod === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedMethod === 'upi' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Enter UPI ID</h3>
              <input
                type="text"
                placeholder="username@paytm"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-400 outline-none"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-green-400">
                  <SiGooglepay className="text-2xl" />
                  <span className="text-sm">GPay</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-green-400">
                  <SiPhonepe className="text-2xl text-purple-600" />
                  <span className="text-sm">PhonePe</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-green-400">
                  <SiPaytm className="text-2xl text-blue-500" />
                  <span className="text-sm">Paytm</span>
                </button>
              </div>
            </div>
          )}

          {selectedMethod === 'card' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Enter Card Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="16"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-400 outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength="3"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-400 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'netbanking' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Select Your Bank</h3>
              <div className="grid grid-cols-2 gap-3">
                {['SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'PNB'].map((bank) => (
                  <button
                    key={bank}
                    className="p-3 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all text-left font-semibold"
                  >
                    {bank} Bank
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedMethod === 'wallet' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Select Wallet</h3>
              <div className="space-y-3">
                {['Paytm', 'PhonePe', 'Mobikwik', 'Freecharge'].map((wallet) => (
                  <button
                    key={wallet}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all text-left font-semibold flex items-center justify-between"
                  >
                    <span>{wallet}</span>
                    <span className="text-green-400">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedMethod === 'qr' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Scan QR Code</h3>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <FaQrcode className="text-8xl text-gray-400" />
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">Scan this QR code using any UPI app</p>
            </div>
          )}

        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({items?.length || 0})</span>
                <span className="font-semibold">Rs {subtotal}/-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">Rs {deliveryfee}/-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes</span>
                <span className="font-semibold">Rs {taxes?.toFixed(2)}/-</span>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 pt-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-green-400">Rs {total}/-</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-4 rounded-lg transition-colors"
            >
              Pay Rs {total}/-
            </button>

            <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-500">
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;
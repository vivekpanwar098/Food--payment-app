import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
        <FaCheckCircle className="text-8xl text-green-400 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-xl text-gray-600 mb-6">
          Your order has been placed successfully
        </p>
        
        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <p className="text-gray-600 mb-2">Order ID</p>
          <p className="text-2xl font-bold text-green-400">
            #ORD{Math.floor(Math.random() * 1000000)}
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Redirecting to home in 5 seconds...
        </p>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-3 rounded-lg transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
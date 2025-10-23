import React from 'react';
import { FaCreditCard, FaMobileAlt, FaUniversity, FaQrcode } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';

const PaymentMethods = () => {
  return (
    <div className="w-full bg-gray-50 rounded-lg p-4 mb-4">
      <p className="text-center text-gray-600 text-sm mb-3 font-semibold">
        We Accept
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* UPI */}
        <div className="flex flex-col items-center gap-1">
          <SiGooglepay className="text-3xl text-blue-600" />
          <span className="text-xs text-gray-500">GPay</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <SiPhonepe className="text-3xl text-purple-600" />
          <span className="text-xs text-gray-500">PhonePe</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <SiPaytm className="text-3xl text-blue-500" />
          <span className="text-xs text-gray-500">Paytm</span>
        </div>
        
        {/* Cards */}
        <div className="flex flex-col items-center gap-1">
          <FaCreditCard className="text-3xl text-green-600" />
          <span className="text-xs text-gray-500">Cards</span>
        </div>
        
        {/* UPI QR */}
        <div className="flex flex-col items-center gap-1">
          <FaQrcode className="text-3xl text-orange-600" />
          <span className="text-xs text-gray-500">UPI QR</span>
        </div>
        
        {/* Net Banking */}
        <div className="flex flex-col items-center gap-1">
          <FaUniversity className="text-3xl text-red-600" />
          <span className="text-xs text-gray-500">Banking</span>
        </div>
        
        {/* Wallet */}
        <div className="flex flex-col items-center gap-1">
          <FaMobileAlt className="text-3xl text-indigo-600" />
          <span className="text-xs text-gray-500">Wallets</span>
        </div>
      </div>
      
      <div className="mt-3 flex justify-center items-center gap-2 text-xs text-gray-500">
        <span className="bg-green-100 px-2 py-1 rounded">🔒 Secure</span>
        <span className="bg-blue-100 px-2 py-1 rounded">⚡ Instant</span>
        <span className="bg-purple-100 px-2 py-1 rounded">✅ Verified</span>
      </div>
    </div>
  );
};

export default PaymentMethods;
import React from 'react';
import useRazorpay from 'react-razorpay';
import { toast } from 'react-toastify';

const Payment = ({ amount, onSuccess, onClose }) => {
  const [Razorpay] = useRazorpay();

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_YOUR_KEY_ID', // ⚠️ APNI KEY YAHAN PASTE KARO
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Food Delivery App',
      description: 'Food Order Payment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      
      // ✅ PAYMENT METHODS - SAB ENABLE KARO
      method: {
        netbanking: true,      // ✅ Net Banking
        card: true,            // ✅ Credit/Debit Card
        wallet: true,          // ✅ PhonePe, Google Pay, Paytm
        upi: true,             // ✅ UPI (GPay, PhonePe, Paytm UPI)
        paylater: false,       // ✅ Pay Later (optional)
        cardless_emi: false,   // ✅ Cardless EMI (optional)
        emi: false             // ✅ EMI (optional)
      },
      
      // ✅ CUSTOMER PREFILL DATA
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      
      // ✅ ORDER NOTES
      notes: {
        order_type: 'Food Delivery',
        delivery_address: 'Customer Address',
      },
      
      // ✅ THEME CUSTOMIZATION
      theme: {
        color: '#4ade80', // Green color
        backdrop_color: '#000000'
      },
      
      // ✅ SUCCESS HANDLER
      handler: function (response) {
        console.log('Payment Successful!');
        console.log('Payment ID:', response.razorpay_payment_id);
        console.log('Order ID:', response.razorpay_order_id);
        console.log('Signature:', response.razorpay_signature);
        
        toast.success('🎉 Payment Successful! Order Placed');
        onSuccess(response);
      },
      
      // ✅ MODAL SETTINGS
      modal: {
        ondismiss: function () {
          toast.info('Payment Cancelled');
          onClose();
        },
        confirm_close: true, // Confirm before closing
        escape: false, // Don't allow ESC to close
        animation: true,
        backdropclose: false // Click outside won't close
      },
      
      // ✅ RETRY SETTINGS
      retry: {
        enabled: true,
        max_count: 3
      },
      
      // ✅ TIMEOUT
      timeout: 300, // 5 minutes (300 seconds)
      
      // ✅ REMEMBER CUSTOMER
      remember_customer: true,
    };

    const razorpayInstance = new Razorpay(options);
    
    // ✅ PAYMENT FAILED HANDLER
    razorpayInstance.on('payment.failed', function (response) {
      console.error('Payment Failed:', response.error);
      toast.error(`Payment Failed: ${response.error.description}`);
      
      // Error details
      console.log('Error Code:', response.error.code);
      console.log('Error Description:', response.error.description);
      console.log('Error Source:', response.error.source);
      console.log('Error Step:', response.error.step);
      console.log('Error Reason:', response.error.reason);
    });

    razorpayInstance.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-[80%] bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
    >
      <span>💳</span>
      <span>Pay Rs {amount}/-</span>
    </button>
  );
};

export default Payment;
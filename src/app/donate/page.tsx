'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaCreditCard, FaPaypal, FaMobile } from 'react-icons/fa';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const predefinedAmounts = [50, 100, 200, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!amount) {
      alert('Please select or enter an amount');
      return;
    }

    // Here you would typically integrate with your payment processor
    // For now, we'll just show a success message
    alert(`Thank you for your donation of $${amount}! You will be redirected to the payment page.`);
    
    // Redirect to payment page or open payment modal
    // window.location.href = `/payment?amount=${amount}&method=${paymentMethod}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image 
          src="/donate-hero.jpg"
          alt="Donation Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Make a Difference Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-8 max-w-3xl"
          >
            Your donation helps us empower rural communities and create lasting change
          </motion.p>
        </div>
      </div>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Select Donation Amount</h2>
              
              {/* Predefined Amounts */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg text-lg font-semibold transition-colors ${
                      selectedAmount === amount
                        ? 'bg-[#4db848] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    id="customAmount"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4db848] focus:border-[#4db848]"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 transition-colors flex items-center justify-center gap-2 ${
                      paymentMethod === 'card'
                        ? 'border-[#4db848] bg-[#4db848] text-white'
                        : 'border-gray-200 hover:border-[#4db848]'
                    }`}
                  >
                    <FaCreditCard size={20} />
                    <span>Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 rounded-lg border-2 transition-colors flex items-center justify-center gap-2 ${
                      paymentMethod === 'paypal'
                        ? 'border-[#4db848] bg-[#4db848] text-white'
                        : 'border-gray-200 hover:border-[#4db848]'
                    }`}
                  >
                    <FaPaypal size={20} />
                    <span>PayPal</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('mobile')}
                    className={`p-4 rounded-lg border-2 transition-colors flex items-center justify-center gap-2 ${
                      paymentMethod === 'mobile'
                        ? 'border-[#4db848] bg-[#4db848] text-white'
                        : 'border-gray-200 hover:border-[#4db848]'
                    }`}
                  >
                    <FaMobile size={20} />
                    <span>Mobile Money</span>
                  </button>
                </div>
              </div>

              {/* Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDonate}
                className="w-full bg-[#4db848] text-white py-4 rounded-lg text-xl font-semibold hover:bg-[#3a9b3a] transition-colors flex items-center justify-center gap-2"
              >
                <FaHandHoldingHeart size={24} />
                Donate Now
              </motion.button>

              {/* Additional Information */}
              <p className="text-center text-gray-600 mt-6">
                Your donation is secure and tax-deductible. Thank you for your support!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Your Impact</h2>
            <p className="text-xl text-gray-700 mb-8">
              Every donation makes a difference in the lives of rural communities. Here's what your contribution can do:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">$50</h3>
                <p className="text-gray-600">Provides digital literacy training for one person</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">$100</h3>
                <p className="text-gray-600">Supports a small business with digital tools</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">$500</h3>
                <p className="text-gray-600">Funds a community digital center for a month</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
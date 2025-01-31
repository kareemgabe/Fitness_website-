import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import WhatsAppButton from '@/components/WhatsAppButton';
export default function Checkout() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

 
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  
  useEffect(() => {
   
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6">Checkout</h1>
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty!</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="border-b py-2 flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 text-xl font-bold flex justify-between">
            <span>Grand Total:</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <button className="mt-6 px-6 py-3 w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:opacity-80">
            Complete Payment
          </button>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}






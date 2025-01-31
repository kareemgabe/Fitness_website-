import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';

export default function CartSidebar({ isOpen, closeCart }) {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  
  const handleCheckout = () => {
    router.push('/checkout'); // Navigate to checkout
    closeCart(); // Close sidebar after navigating
  };

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Shopping Cart</h2>
        <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty!</p>
        ) : (
          <ul className="space-y-4 flex-grow">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-2 flex justify-between items-center">
                <span>{item.name}</span>
                <span className="font-bold">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t">
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow-md hover:opacity-80"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

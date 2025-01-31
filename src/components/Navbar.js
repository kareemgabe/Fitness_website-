import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Navbar({ toggleCart }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Doctor & Coach
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/" className="hover:text-blue-500">Store</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/" className="hover:text-blue-500">About Us</Link>

          {/* Cart Icon */}
          <button onClick={toggleCart} className="relative">
            <ShoppingCart size={24} className="text-blue-500 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              0 {/* Replace with dynamic cart count */}
            </span>
          </button>

          {/* Join Now Button */}
          <button
            onClick={() => router.push('/join')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-80"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Store</Link>
            <Link href="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>

            {/* Cart Icon */}
            <button onClick={toggleCart} className="relative">
              <ShoppingCart size={24} className="text-blue-500 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                0 {/* Replace with dynamic cart count */}
              </span>
            </button>

            {/* Join Now Button */}
            <button
              onClick={() => { router.push('/join'); setIsOpen(false); }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-80"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

export default function MyApp({ Component, pageProps }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative">
    <Navbar toggleCart={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

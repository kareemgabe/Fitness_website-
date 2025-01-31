import { useRouter } from 'next/router';
export default function Footer() {
  const router = useRouter();
    return (
      <footer className="bg-gray-100 py-10 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
             
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
              </div>
              <button className="mt-4 px-6 py-2 text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg shadow-md hover:bg-gray-200">Contact With Us →</button>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold">Useful Links</h3>
              <ul className="mt-2 text-gray-600">
                <li><a href="/about">About Us</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Get Contact</h3>
              <p className="text-gray-600">Phone: 01012235468</p>
              <p className="text-gray-600">Email: test@gmail.com</p>
            </div>
          </div>
          <p className="mt-10 text-gray-500 text-sm">Copyright © 2024 Marketopia Team. All Rights Reserved</p>
        </div>
      </footer>
    );
  }
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
export default function Join() {
    return (
      <div>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Login & Register</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          {/* Login Form */}
          <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
            </div>
          </form>

          {/* Register Form */}
          <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email address:</label>
              <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
            </div>
          </form>
        </div>
      </div>
       <WhatsAppButton />
      </div>
    );
}
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CalorieCalculator() {
  return (
    <div>
    
    <div className="min-h-screen flex flex-col bg-purple-100">
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Calorie Calculator</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center">
          {/* Image Section */}
          <div className="bg-white p-6 rounded shadow-md flex items-center justify-center w-full md:w-1/2">
            <img src="/calorie-calculator.png" alt="Calorie Calculator" className="w-60 h-auto" />
          </div>
          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center">Get Free Caloric Calculation</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <input type="number" placeholder="Age" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <input type="number" placeholder="Weight" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <input type="number" placeholder="Height" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Male</option>
                <option>Female</option>
              </select>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Get Now</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  );
}

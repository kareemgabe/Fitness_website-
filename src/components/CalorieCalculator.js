import Navbar from '../components/Navbar';

export default function CalorieCalculatorPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8">Calorie Calculator</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Image Section */}
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm flex items-center justify-center">
          <img src="/calorie-calculator.png" alt="Calorie Calculator" className="w-40" />
        </div>
        {/* Form Section */}
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Get Free Caloric Calculation</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="number" placeholder="Age" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="number" placeholder="Weight" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="number" placeholder="Height" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Male</option>
              <option>Female</option>
            </select>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Get Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
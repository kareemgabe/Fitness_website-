import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
const services = [
  { id: 1, name: 'نظام غذائي test', description: 'Nutrition Plan', button: 'See More' },
  { id: 2, name: 'workout1', description: 'Workout Plan 1', button: 'See More' },
  { id: 3, name: 'workout2', description: 'Workout Plan 2', button: 'See More' },
  { id: 4, name: 'get fit plan', description: 'Get Fit Plan', button: 'See More' },
];

export default function Services() {
  return (
    <div>
      
      <div className="text-center bg-gradient-to-b from-blue-500 to-purple-500 py-16">
        <h1 className="text-4xl font-bold text-white">All Services</h1>
        <span className="text-sm bg-white text-gray-800 py-1 px-3 rounded-full mt-2 inline-block">{services.length} Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-80">{service.button}</button>
          </div>
        ))}
      </div>
     <WhatsAppButton />
    </div>
  );
}

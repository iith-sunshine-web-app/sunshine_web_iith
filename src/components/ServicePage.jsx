import { services } from '../data/servicesData.js';
import ServiceCard from './ServiceCard.jsx';
import backgroundPattern from '../assets/backgroundPattern.png';

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
        <h1 className="text-4xl font-bold text-gray-800">Services We offer</h1>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 aspect-video relative overflow-hidden">
         <img 
            src={backgroundPattern} 
            alt="Decorative pattern" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Grid for Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
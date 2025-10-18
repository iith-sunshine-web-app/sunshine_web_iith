function ServiceCard({ service }) {
  return (
    <div className={`rounded-lg shadow-md p-6 ${service.color}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
      <div className="flex flex-col md:flex-row gap-6"> {/* This div arranges image/text */}
        {/* Image Placeholder */}
        <div className="w-full md:w-1/3 bg-gray-300 rounded flex items-center justify-center text-gray-500 aspect-video md:aspect-auto">
          Image Placeholder
        </div>
        {/* Text Content */}
        <div className="w-full md:w-2/3">
          <p className="text-sm text-gray-600 font-semibold">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
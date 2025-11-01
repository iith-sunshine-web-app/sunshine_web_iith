import { Link } from 'react-router-dom';
import eventMainImage from '../assets/event-main-image.png'; // Import the image you exported

function EventsPage() {
  // Placeholder data for the gallery grid layout.
  // The classes 'col-span-X' and 'row-span-X' create the mosaic effect.
  const galleryItems = [
    { id: 1, class: 'col-span-1 row-span-1 h-40' },
    { id: 2, class: 'col-span-1 row-span-1 h-40' },
    { id: 3, class: 'col-span-1 row-span-2 h-80' }, // Tall item
    { id: 4, class: 'col-span-2 row-span-2 h-80' }, // Large 2x2 item
    { id: 5, class: 'col-span-1 row-span-1 h-40' },
    { id: 6, class: 'col-span-1 row-span-1 h-40' },
    { id: 7, class: 'col-span-1 row-span-1 h-40' },
    { id: 8, class: 'col-span-1 row-span-1 h-40' },
  ];

  return (
    // Main container with the same light/peach background as other pages
    <div className="container mx-auto my-12 p-8 bg-sunshine-peach rounded-lg shadow-xl">
      
      {/* --- Top Section --- */}
      <div className="relative mb-8">
        
        {/* Back Arrow Link
        <Link to="/" className="absolute top-2 left-0 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link> */}
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          "Random Act of Kindness" - Spreading Positivity at IITH
        </h1>
      </div>

      {/* --- Description & Main Image Section --- */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Description Text */}
        <div className="w-full md:w-1/2 text-gray-700">
          <p>description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description</p>
        </div>
        {/* Main Image */}
        <div className="w-full md:w-1/2">
          <img src={eventMainImage} alt="Event" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* --- Gallery Section --- */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery</h2>
        
        {/* This grid uses 'grid-flow-dense' to pack items tightly */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-4">
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className={`bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 ${item.class}`}
            >
              Placeholder
            </div>
          ))}
        </div>
        <p className="text-right text-gray-500 italic mt-4">
          *The images grid will differ based on the images
        </p>
      </div>

    </div>
  );
}

export default EventsPage;
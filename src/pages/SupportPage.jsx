import { supportData } from '../data/supportData.js';
import ProgramSection from '../components/ProgramSection.jsx';

function SupportPage() {
  
  // A placeholder array for your 7-8 scrolling images
  const scrollingImages = [
    'https://via.placeholder.com/300x200?text=Img+1',
    'https://via.placeholder.com/300x200?text=Img+2',
    'https://via.placeholder.com/300x200?text=Img+3',
    'https://via.placeholder.com/300x200?text=Img+4',
    'https://via.placeholder.com/300x200?text=Img+5',
    'https://via.placeholder.com/300x200?text=Img+6',
    'https://via.placeholder.com/300x200?text=Img+7',
    'https://via.placeholder.com/300x200?text=Img+8',
  ];

  return (
    // CHANGE #1: Added the 'bg-sunshine-peach' class for the background
    // (Ensure 'sunshine-peach' is defined in your index.html <script> config)
    <div className="container mx-auto my-12 p-8 rounded-lg">
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        About peer support program
      </h1>
      
      {/* --- CHANGE #2: REPLACED SCROLLING IMAGES SECTION --- */}
      <div className="mb-12 w-full overflow-hidden whitespace-nowrap">
        <h2 className="text-lg font-semibold text-center mb-4">*Scrolling images</h2>
        {/* The scrolling animation container */}
        <div className="animate-scroll inline-block">
          {/* Render the list of images */}
          {scrollingImages.map((src, index) => (
            <img 
              key={`img-a-${index}`} 
              src={src} 
              className="inline-block w-48 h-32 bg-gray-300 rounded-lg mx-2" 
              alt={`Scrolling image ${index + 1}`}
            />
          ))}
          {/* We MUST duplicate the list for the infinite loop to be seamless */}
          {scrollingImages.map((src, index) => (
            <img 
              key={`img-b-${index}`} 
              src={src} 
              className="inline-block w-48 h-32 bg-gray-300 rounded-lg mx-2" 
              alt={`Scrolling image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Render the three program sections */}
      <div className="space-y-16">
        {supportData.map(program => (
          <ProgramSection key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

export default SupportPage;
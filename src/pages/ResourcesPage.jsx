import { resources } from '../data/resourcesData.js';
import ResourceSection from '../components/ResourceSection.jsx';

function ResourcesPage() {

  // Function to handle smooth scrolling when a bubble is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Top Bubble Navigation Section */}
      <div className="relative mb-20 p-10 bg-gray-50 rounded-lg min-h-[300px] flex items-center justify-center">
        {/* Central Title */}
        <h2 className="text-3xl font-bold bg-white p-4 rounded-lg shadow z-10">Resource Sections</h2>

        {resources.map((res, index) => (
          <button
            key={res.id}
            onClick={() => scrollToSection(res.id)}
            style={getBubbleStyle(index)} 
            className={`absolute p-3 rounded-lg shadow text-white font-semibold cursor-pointer hover:scale-105 transition-transform ${res.bubbleColor}`}
          >
            {res.title}
          </button>
        ))}
        <div className="absolute top-10 right-20 w-24 h-10 bg-orange-200 rounded-lg shadow opacity-70"></div>
        <div className="absolute bottom-10 left-16 w-16 h-8 bg-cyan-200 rounded-lg shadow opacity-70"></div>
      </div>

      {/* Resource Sections List */}
      <div className="space-y-16">
        {resources.map(resource => (
          <ResourceSection key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

// Helper function for example bubble positioning
function getBubbleStyle(index) {
  const styles = [
    { top: '15%', left: '32%' }, // Digital wellness
    { top: '18%', left: '60%' }, // relaxation techniques
    { top: '60%', left: '20%' }, // Anxiety coping
    { bottom: '25%', right: '20%' }, // stress management
    { bottom: '10%', left: '40%' }, // strategies
  ];
  return styles[index % styles.length] || { top: `${Math.random()*70+10}%`, left: `${Math.random()*70+10}%` };
}


export default ResourcesPage;
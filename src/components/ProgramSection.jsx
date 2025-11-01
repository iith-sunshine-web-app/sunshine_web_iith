import { Link } from 'react-router-dom';

function ProgramSection({ program }) {
  
  // --- 1. Dynamic Color Variables ---
  // This logic is correct and matches your 'id' fields.
  let buttonColorClass, infoBlockColor, bubbleColor, bubbleTextColor;

  switch (program.id) {
    case 'mentor-program':
      buttonColorClass = 'bg-blue-700 hover:bg-blue-800';
      infoBlockColor = 'bg-blue-50 border-blue-200';
      bubbleColor = 'bg-blue-200';
      bubbleTextColor = 'text-blue-800';
      break;
    case 'well-being-program':
      buttonColorClass = 'bg-orange-600 hover:bg-orange-700';
      infoBlockColor = 'bg-orange-50 border-orange-200';
      bubbleColor = 'bg-orange-200';
      bubbleTextColor = 'text-orange-800';
      break;
    case 'buddy-program':
    default: 
      buttonColorClass = 'bg-teal-700 hover:bg-teal-800';
      infoBlockColor = 'bg-teal-50 border-teal-200';
      bubbleColor = 'bg-teal-200';
      bubbleTextColor = 'text-teal-800';
      break;
  }

  // --- 2. InfoBlock Component ---
  // This helper component is now safer and won't crash.
  const InfoBlock = ({ title, content, className = "" }) => (
    <div className={`p-5 rounded-lg border shadow-sm ${infoBlockColor} ${className}`}>
      
      {/* Only render the title if one was provided */}
      {title && <h4 className="font-bold text-gray-800 mb-2">{title}</h4>}
      
      {/* Safely check if 'content' is an array before mapping */}
      {Array.isArray(content) && content.length > 0 && ( 
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
      
      {/* Safely check if 'content' is a string before rendering */}
      {typeof content === 'string' && content.length > 0 && (
        <p className="text-lg text-gray-700">{content}</p>
      )}
    </div>
  );

  return (
    <section id={program.id} className="mb-12 scroll-mt-20">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          
          <InfoBlock className="md:col-span-2" content={program.description} />
          
          {/* FIX #1: Using 'program.roles' to match your data file */}
          <InfoBlock className="md:col-span-2" title="Roles and Responsibilities" content={program.roles} />
          
          <InfoBlock className="md:col-span-2" title="Benefits of Being a Buddy" content={program.benefits} />

          <div className="md:col-span-2 flex items-center justify-center p-4">
            <h3 className={`text-2xl font-bold ${bubbleTextColor} ${bubbleColor} py-3 px-8 rounded-full shadow`}>
              {program.title}
            </h3>
          </div>
        </div> {/* End Top Layout Grid */}

        <div className="flex justify-center mb-8">
          <h3 className={`text-xl font-bold text-gray-700 ${bubbleColor} py-3 px-8 rounded-full shadow`}>
            {program.actionTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* FIX #2: Using 'meetups1[0]' for title and 'meetups1[1]' for content */}
          <InfoBlock 
            title={program.meetups1 && program.meetups1[0]} 
            content={program.meetups1 && program.meetups1[1]} 
          />
          
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>

          {/* FIX #3: Using 'meetups2[0]' for title and 'meetups2[1]' for content */}
          <InfoBlock 
            title={program.meetups2 && program.meetups2[0]} 
            content={program.meetups2 && program.meetups2[1]} 
          />
        </div> {/* End Bottom Layout Grid */}

        <div className="text-center mt-10">
          <Link 
            to={program.buttonLink}
            className={`text-white font-semibold py-3 px-10 rounded-full shadow-md transition-colors ${buttonColorClass}`}
          >
            {program.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
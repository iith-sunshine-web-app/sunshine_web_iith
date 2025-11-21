import { useState } from "react";
import events from "../data/events.json";

// Converts "March 2025" to a Date object for comparison
function parseMonthYear(monthYear) {
  if (!monthYear) return new Date(0);
  const [month, year] = monthYear.split(" ");
  const monthIndex = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].indexOf(month);
  if (monthIndex === -1 || isNaN(Number(year))) return new Date(0);
  return new Date(Number(year), monthIndex);
}

const gradientColors = [
  "from-orange-400/90 to-orange-200/10",
  "from-cyan-500/90 to-cyan-100/10",
  "from-green-700/90 to-green-200/10",
  "from-pink-500/90 to-pink-100/10",
  "from-sky-600/90 to-sky-100/10",
  "from-purple-700/90 to-purple-100/10",
];

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sort events by latest month/year first
  const sortedEvents = [...events].sort(
    (a, b) => parseMonthYear(b.month) - parseMonthYear(a.month)
  );

  if (selectedEvent) {
    return (
      <div className="container mx-auto p-6 bg-[#ffffff] rounded-lg min-h-[80vh]">
        <button
          onClick={() => setSelectedEvent(null)}
          className="mb-4 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17 9H7.83l3.58-3.59A1 1 0 1 0 9.42 4.58l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42-1.42L7.83 11H17a1 1 0 1 0 0-2z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          {selectedEvent.name}
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1 text-gray-700">
            {selectedEvent.description}
          </div>
          <img
            src={selectedEvent.photos[0]}
            alt={selectedEvent.name}
            className="flex-1 w-full h-56 object-cover rounded-lg shadow"
          />
        </div>
        {selectedEvent.photos.length > 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Gallery
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {selectedEvent.photos.slice(1, 4).map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`${selectedEvent.name} ${idx + 1}`}
                  className="rounded-lg object-cover h-32 w-44"
                />
              ))}
            </div>
            {/* {selectedEvent.driveLink && (
              <a
                href={selectedEvent.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sunshine-orange text-black px-4 py-2 rounded hover:bg-orange-400 transition font-medium"
              >
                View More Photos
              </a>
            )} */}
          </div>
        )}
      </div>
    );
  }

  // Main event grid view
  return (
    <div className="container mx-auto p-6 bg-[#ffffff] rounded-lg min-h-[80vh]">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Events
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sortedEvents.map((event, idx) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg flex flex-col h-full overflow-hidden"
            style={{ minHeight: "320px" }}
          >
            {/* Photo at the top */}
            <img
              src={event.photos[0]}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            {/* Spacer */}
            <div className="flex-1" />
            {/* Gradient bar at the bottom */}
            <div
              className={`
                flex items-center justify-between
                px-4 py-3
                bg-gradient-to-t ${gradientColors[idx % gradientColors.length]}
              `}
            >
              <div>
                <div className="font-semibold text-base text-white drop-shadow-sm">
                  {event.name}
                </div>
                <div className="text-xs text-white drop-shadow-sm">
                  {event.month}
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(event)}
                className="ml-2 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Expand"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;

// import { Link } from 'react-router-dom';
// import eventMainImage from '../assets/event-main-image.png'; // Import the image you exported

// function EventsPage() {
//   // Placeholder data for the gallery grid layout.
//   // The classes 'col-span-X' and 'row-span-X' create the mosaic effect.
//   const galleryItems = [
//     { id: 1, class: 'col-span-1 row-span-1 h-40' },
//     { id: 2, class: 'col-span-1 row-span-1 h-40' },
//     { id: 3, class: 'col-span-1 row-span-2 h-80' }, // Tall item
//     { id: 4, class: 'col-span-2 row-span-2 h-80' }, // Large 2x2 item
//     { id: 5, class: 'col-span-1 row-span-1 h-40' },
//     { id: 6, class: 'col-span-1 row-span-1 h-40' },
//     { id: 7, class: 'col-span-1 row-span-1 h-40' },
//     { id: 8, class: 'col-span-1 row-span-1 h-40' },
//   ];

//   return (
//     // Main container with the same light/peach background as other pages
//     <div className="container mx-auto my-12 p-8 bg-sunshine-peach rounded-lg shadow-xl">

//       {/* --- Top Section --- */}
//       <div className="relative mb-8">

//         {/* Back Arrow Link
//         <Link to="/" className="absolute top-2 left-0 text-gray-600 hover:text-gray-900">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//         </Link> */}

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           "Random Act of Kindness" - Spreading Positivity at IITH
//         </h1>
//       </div>

//       {/* --- Description & Main Image Section --- */}
//       <div className="flex flex-col md:flex-row gap-8 mb-12">
//         {/* Description Text */}
//         <div className="w-full md:w-1/2 text-gray-700">
//           <p>description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description</p>
//         </div>
//         {/* Main Image */}
//         <div className="w-full md:w-1/2">
//           <img src={eventMainImage} alt="Event" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* --- Gallery Section --- */}
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery</h2>

//         {/* This grid uses 'grid-flow-dense' to pack items tightly */}
//         <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-4">
//           {galleryItems.map(item => (
//             <div
//               key={item.id}
//               className={`bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 ${item.class}`}
//             >
//               Placeholder
//             </div>
//           ))}
//         </div>
//         <p className="text-right text-gray-500 italic mt-4">
//           *The images grid will differ based on the images
//         </p>
//       </div>

//     </div>
//   );
// }

// export default EventsPage;

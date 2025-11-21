function AppointmentCard({ card }) {
  return (
    // The main card, with the dynamic border color
    <div
      className={`flex justify-between items-center bg-white p-6 rounded-lg border-2 shadow-sm ${card.borderColor}`}
    >
      {/* Left side: Title and Contacts */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {card.title}
          {/* Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </h3>
        {/* List of contacts */}
        <ul className="space-y-1">
          {card.contacts.map((contact, index) => (
            <li key={index} className="text-gray-700">
              {contact.name}:
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2 font-medium"
              >
                {contact.linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Image Placeholder */}
      {/* <div className="w-32 h-20 bg-gray-200 rounded-md flex-shrink-0 ml-4">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="rounded object-cover w-full h-full"
          loading="lazy"
        />
      </div> */}
    </div>
  );
}

export default AppointmentCard;

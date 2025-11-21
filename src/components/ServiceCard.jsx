function ServiceCard({ service }) {
  let descriptionContent;

  // CASE 1: Crisis service (intro + titled bullet points)
  if (typeof service.description === "object" && service.description.intro) {
    descriptionContent = (
      <>
        <p className="mb-3 leading-relaxed">{service.description.intro}</p>

        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          {service.description.points.map((point, index) => (
            <li key={index}>
              <strong className="text-gray-800">{point.title}</strong>{" "}
              {point.text}
            </li>
          ))}
        </ul>
      </>
    );
  }

  // CASE 2: Array of bullet points (6-line services)
  else if (Array.isArray(service.description)) {
    descriptionContent = (
      <ul className="list-disc list-inside space-y-2 leading-relaxed">
        {service.description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  }

  // CASE 3: Simple string fallback
  else {
    descriptionContent = (
      <p className="leading-relaxed">{service.description}</p>
    );
  }

  return (
    <div className={`rounded-lg shadow-md p-6 ${service.color}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* IMAGE */}
        {/* <div className="w-full md:w-1/3 bg-gray-300 rounded flex items-center justify-center text-gray-500 aspect-video">
          Image Placeholder
        </div> */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="rounded object-cover w-full h-36"
            loading="lazy"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-2/3">
          <div className="text-sm text-gray-700 font-medium leading-relaxed">
            {descriptionContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

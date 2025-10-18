function ResourceSection({ resource }) {
  // We'll use the ID to create an anchor point for scrolling
  return (
    <section id={resource.id} className={`mb-12 p-8 rounded-lg shadow-md ${resource.color}`}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">{resource.title}</h3>
          <p className="text-sm text-gray-600">{resource.description}</p>
        </div>
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-300 rounded flex items-center justify-center text-gray-500 aspect-video">
          {/* Replace with image */}
          Image
        </div>
      </div>
    </section>
  );
}

export default ResourceSection;
import { appointmentData } from "../data/appointmentData.js";
import AppointmentCard from "../components/AppointmentCard.jsx";

function AppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Top Section: Titles and Image */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        {/* Titles */}
        <div>
          <p className="text-lg font-semibold text-gray-600">
            Appointment selection
          </p>
          <h1 className="text-5xl font-bold text-gray-800 mt-2">
            Feel free to contact us anytime
          </h1>
        </div>
        {/* Top Image Placeholder */}
        <div className="w-full md:w-1/3 h-48 rounded-lg flex-shrink-0">
          <img
            src="/assets/appointment.jpg"
            alt="Book your appointment"
            className="rounded object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* 2x2 Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {appointmentData.map((card) => (
          <AppointmentCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default AppointmentPage;

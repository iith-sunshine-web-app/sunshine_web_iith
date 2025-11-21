import { useState } from "react";
import ficBackground from "../assets/backgroundPattern.png";

function MemberCard({ member, isFeatured = false }) {
  const [showAbout, setShowAbout] = useState(false);

  const AboutModal = () => (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40"
      onClick={() => setShowAbout(false)}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 max-w-xs w-full text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={() => setShowAbout(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
        <div className="text-sm text-gray-600 mb-4">{member.role}</div>
        <div className="text-sm text-gray-600">
          {member.about || "No additional info."}
        </div>
      </div>
    </div>
  );

  const CardBody = (
    <>
      <img
        src={member.imageUrl || "https://via.placeholder.com/150"}
        alt={`Photo of ${member.name}`}
        className="w-24 h-24 rounded-md mx-auto object-cover bg-gray-200 mb-2"
      />
      <h4 className="font-bold text-gray-800">{member.name}</h4>
      <p className="text-xs text-gray-500 break-all">{member.email}</p>
      {member.about && (
        <div className="flex justify-center mt-2">
          <button
            className="scale-[0.8] bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center shadow transition"
            onClick={() => setShowAbout(true)}
            aria-label="Show about"
            title="More about"
          >
            <span className="font-normal text-base leading-none select-none">
              i
            </span>
          </button>
        </div>
      )}
      {showAbout && <AboutModal />}
    </>
  );

  if (isFeatured) {
    return (
      <div
        className="rounded-2xl p-2 border-4 border-teal-300 shadow-xl"
        style={{
          backgroundImage: `url(${ficBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white rounded-lg p-4 text-center">{CardBody}</div>
      </div>
    );
  } else {
    return (
      <div className="rounded-lg p-4 text-center bg-white border border-gray-300 shadow-sm">
        {CardBody}
      </div>
    );
  }
}

export default MemberCard;

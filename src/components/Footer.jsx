import sunshineLogo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Import Link

function Footer() {
  return (
    <footer className="bg-sunshine-deep-orange text-white py-8 px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        {/* Responsive Layout: 
                  - On mobile (default): flex-col, items-center, text-center
                  - On medium screens (md:): flex-row, justify-between, items-start, text-left
                */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-16 mb-8">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <img src={sunshineLogo} alt="Sunshine Logo" className="h-20 mb-0" />
            {/* <p className="mt-0 text-sunshine-bright-orange font-bold"> */}
            <p className="mt-0 text-white font-bold">SUNSHINE</p>
            <p>The counselling cell of IITH</p>
            <div className="">{/* For Icons */}</div>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-4">Contact us anytime</p>
            {/* Use Links for navigation */}
            <p className="text-[1.2rem] mb-2">
              <Link to="/appointment" className="hover:underline">
                Appointment
              </Link>
            </p>
            <p className="text-[1.2rem] mb-2">
              <Link to="/team" className="hover:underline">
                Team
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar:
                  - On mobile (default): flex-col
                  - On medium screens (md:): flex-row, justify-between
                */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[0.9rem] border-t border-white/30 pt-4 gap-2">
          <p>Copyright © 2023 Sunshine, IIT Hyderabad</p>
          {/* Assuming you will build a developers page later */}
          {/* <a href='#' className="text-white hover:underline">Developers Team</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

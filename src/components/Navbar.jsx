import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import sunshineLogo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    // , subMenu: [
    //     { name: 'Individual Sessions', path: '#' },
    //     { name: 'Depression and Anxiety Management', path: '#' },
    //     { name: 'Grief and loss counselling', path: '#' },
    //     { name: 'Relationship and interpersonal issues', path: '#' },
    //     { name: 'Identity and self esteem support', path: '#' },
    //     { name: 'Trauma informed care', path: '#' },
    //     { name: 'Academic challenges', path: '#' },
    //     { name: 'Crisis Intervention', path: '#' },
    // ]
  },
  {
    name: "Support",
    path: "/support",
    // subMenu: [
    //   { name: "Buddy Program", path: "/support#buddy-program" },
    //   { name: "Mentor Program", path: "/support#mentor-program" },
    //   {
    //     name: "Well-being Representative",
    //     path: "/support#well-being-representives",
    //   },
    // ],
  },
  {
    name: "Resources",
    path: "/resources",
    // subMenu: [
    //   { name: "Digital wellness", path: "#" },
    //   { name: "Stress management techniques", path: "#" },
    //   { name: "Relaxation techniques", path: "#" },
    //   { name: "Anxiety coping technique", path: "#" },
    //   { name: "....strategies", path: "#" },
    // ],
  },
  { name: "FAQ", path: "/faq" },
  {
    name: "Appointment",
    path: "/appointment",
    // subMenu: [
    //   { name: "Whatsapp", path: "#" },
    //   { name: "Email", path: "#" },
    //   { name: "Offline/Online", path: "#" },
    // ],
  },
  {
    name: "Team",
    path: "/team",
    subMenu: [
      { name: "Faculties", path: "/team/Faculty" },
      { name: "Counsellors", path: "/team/Counsellors" },
      { name: "Students", path: "/team/Students" },
    ],
  },
  { name: "Events", path: "/events" },
];

// --- This is a new component for the mobile menu links ---
function MobileNavLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) => `
        block py-3 px-4 text-lg font-semibold
        ${
          isActive
            ? "bg-sunshine-orange text-white"
            : "text-gray-800 hover:bg-gray-100"
        }
      `}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const [openDesktopDropDown, setOpenDesktopDropDown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- New state for mobile menu

  // Function to close all menus
  const closeAllMenus = () => {
    setOpenDesktopDropDown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-sunshine-peach shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        {/* Logo */}
        <NavLink to="/" onClick={closeAllMenus}>
          <img
            src={sunshineLogo}
            alt="Sunshine Logo"
            className="h-10 flex-shrink-0"
          />
        </NavLink>

        {/* Desktop Menu (Hidden on mobile) */}
        <ul className="hidden lg:flex flex-grow justify-around items-center list-none max-w-4xl">
          {navItems.map((item) => {
            const commonClasses =
              "py-2 px-3 rounded-lg font-medium text-gray-800 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-sm"; // Smaller text

            return (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  item.subMenu && setOpenDesktopDropDown(item.name)
                }
                onMouseLeave={() =>
                  item.subMenu && setOpenDesktopDropDown(null)
                }
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) => `
                                        ${commonClasses}
                                        hover:text-gray-900
                                        ${isActive ? "bg-sunshine-orange" : ""}
                                    `}
                >
                  {item.name}
                  {item.subMenu && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </NavLink>

                {openDesktopDropDown === item.name && item.subMenu && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 w-max bg-[#fbe4d5] rounded-lg shadow-lg z-10">
                    {item.subMenu.map((subItem) => (
                      <li
                        key={subItem.name}
                        className="border-b border-gray-300 last:border-b-0"
                      >
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-sunshine-orange whitespace-nowrap"
                          onClick={() => setOpenDesktopDropDown(null)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button (Hamburger) - Hidden on large screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-sunshine-orange focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // 'X' Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // 'Menu' Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) - Shows when 'isMobileMenuOpen' is true */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50">
          <ul className="flex flex-col list-none">
            {/* We map over navItems here for the mobile view */}
            {navItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Note: We don't support sub-menus in this simple mobile nav */}
                <MobileNavLink to={item.path} onClick={closeAllMenus}>
                  {item.name}
                </MobileNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

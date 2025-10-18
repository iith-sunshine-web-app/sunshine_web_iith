import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import sunshineLogo from '../assets/logo.png';

const navItems = [
    { name: 'Home', path: '/' },
    {
        name: 'Services', path: '/services', subMenu: [
            { name: 'Individual Sessions', path: '#' },
            { name: 'Depression and Anxiety Management', path: '#' },
            { name: 'Grief and loss counselling', path: '#' },
            { name: 'Relationship and interpersonal issues', path: '#' },
            { name: 'Identity and self esteem support', path: '#' },
            { name: 'Trauma informed care', path: '#' },
            { name: 'Academic challenges', path: '#' },
            { name: 'Crisis Intervention', path: '#' },
        ]
    },
    {
        name: 'Support', path: '#', subMenu: [
            { name: 'Buddy Program', path: '#' },
            { name: 'Mentor Program', path: '#' },
            { name: 'Well-being Representative', path: '#' },
        ]
    },
    {
        name: 'Resources', path: '/resources', subMenu: [
            { name: 'Digital wellness', path: '#' },
            { name: 'Stress management techniques', path: '#' },
            { name: 'Relaxation techniques', path: '#' },
            { name: 'Anxiety coping technique', path: '#' },
            { name: '....strategies', path: '#' },
        ]
    },
    { name: 'FAQ', path: '#'},
    {
        name: 'Appointment', path: '#', subMenu: [
            { name: 'Whatsapp', path:'#' },
            { name: 'Email', path: '#' },
            { name: 'Offline/Online', path: '#' },
        ]
    },
    {
        name: 'Team', path: '/team', subMenu: [
            { name: 'Faculties', path: '/team/Faculty' },
            { name: 'Counsellors', path: '/team/Counsellors' },
            { name: 'Students', path: '/team/Students' },
        ]
    },
    { name: 'Events', path: '#' },
]

function Navbar() {

    const [openDropDown, setOpenDropDown] = useState(null);

    return (
        <nav className="sticky top-0 z-50 flex items-center py-4 px-8 bg-sunshine-peach">
            <NavLink to="/">
                <img src={sunshineLogo} alt="Sunshine Logo" className="h-10 flex-shrink-0" />
            </NavLink>

            <ul className="flex flex-grow justify-around mr-36 items-center list-none">
                {navItems.map((item) => {
                    const commonClasses = "py-2 px-4 rounded-lg font-medium text-gray-800 flex items-center gap-2 cursor-pointer transition-colors duration-200";

                    return (
                        <li
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.subMenu && setOpenDropDown(item.name)} // make drop down visible on hover
                            onMouseLeave={() => item.subMenu && setOpenDropDown(null)}
                        >
                            {item.path === '#' ? (
                                <div className={`${commonClasses} group-hover:bg-sunshine-orange`}>
                                    {item.name}
                                    {item.subMenu && (
                                        <svg className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    end={item.path === '/'}
                                    className={({ isActive }) => `
                                        ${commonClasses}
                                        hover:text-gray-900
                                        ${isActive ? 'bg-sunshine-orange' : ''}
                                    `}
                                >
                                    {item.name}
                                    {item.subMenu && (
                                        <svg
                                            className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    )}
                                </NavLink>
                            )}

                            {openDropDown === item.name && item.subMenu && (
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 w-max bg-[#fbe4d5] rounded-lg shadow-lg z-10">
                                    {item.subMenu.map((subItem) => (
                                        <li key={subItem.name} className="border-b border-gray-300 last:border-b-0">
                                            {/* 2. CHANGE <a> TO <Link> and use the new path */}
                                            <Link
                                                to={subItem.path}
                                                className="block px-4 py-2 text-gray-800 hover:bg-sunshine-orange whitespace-nowrap"
                                                onClick={() => setOpenDropDown(null)} // Close dropdown on click
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
        </nav>
    );
}

export default Navbar;

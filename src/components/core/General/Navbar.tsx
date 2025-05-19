import { useState } from "react";
import {
  FaBars,
  FaNewspaper,
  FaLeaf,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import appLogo from "../../../../images/appLogo.png";

// Link data with icon components
const navlinks = [
  { name: "Matuto", path: "/matuto", icon: FaBars },
  { name: "Balita", path: "/balita", icon: FaNewspaper },
  { name: "Presyo ng Pananim", path: "/presyo", icon: FaLeaf },
  { name: "Kalendaryong Panahon", path: "/kalendaryo", icon: FaCalendarAlt },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FDEBC1] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={appLogo} alt="logo" className="h-auto w-14" />
          <h1 className="text-2xl font-headline">
            Bukid
            <span className="text-malunggay-green font-semibold">Next</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-dark-soil-brown font-headline text-lg">
          {navlinks.map(({ name, path, icon: Icon }) => (
            <a
              key={name}
              href={path}
              className="hover:text-malunggay-green-darker flex items-center gap-2 transition-colors"
            >
              <Icon className="icon w-5 h-5" />
              {name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-dark-soil-brown"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-4 text-dark-soil-brown font-headline text-lg">
            {navlinks.map(({ name, path, icon: Icon }) => (
              <a
                key={name}
                href={path}
                className="flex items-center gap-2 hover:text-malunggay-green-darker transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="icon w-5 h-5" />
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

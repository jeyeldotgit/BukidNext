import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaInfoCircle,
  FaStar,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

import appLogo from "../../../images/appLogo.png";

const navlinks = [
  { name: "Tungkol", path: "/about", icon: <FaInfoCircle /> },
  { name: "Tampok", path: "/features", icon: <FaStar /> },
  { name: "Blogs", path: "/blog", icon: <FaBlog /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation (for mobile)
  };

  return (
    <nav className="w-full px-4 top-0 font-headline font-normal relative z-50">
      <div className="flex justify-between items-center md:px-32 md:py-6 md:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={appLogo} alt="logo" className="h-auto w-14" />
          <h1 className="text-2xl">
            Bukid
            <span className="text-malunggay-green font-semibold">Next</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:items-center md:gap-8 text-lg text-dark-soil-brown">
          {navlinks.map(({ name, path, icon }) => (
            <li key={name} className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(path)}
                className="hover:text-malunggay-green flex items-center gap-2 transition-colors"
              >
                {icon}
                {name}
              </button>
            </li>
          ))}
          <button
            className="btn-neutral font-medium"
            onClick={() => navigate("/signup")}
          >
            Mag Sign-up
          </button>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-dark-soil-brown text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-2">
          <ul className="flex flex-col space-y-4 text-dark-soil-brown text-lg font-headline">
            {navlinks.map(({ name, path }) => (
              <li key={name}>
                <button
                  onClick={() => handleNavigate(path)}
                  className="hover:text-malunggay-green-darker transition-colors"
                >
                  {name}
                </button>
              </li>
            ))}
            <button
              className="btn-neutral mt-2"
              onClick={() => handleNavigate("/signup")}
            >
              Mag Sign-up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

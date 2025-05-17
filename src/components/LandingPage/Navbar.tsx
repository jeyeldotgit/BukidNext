import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import appLogo from "../../../images/appLogo.png";

const navlinks = [
  { name: "Tungkol", path: "/about" },
  { name: "Tampok", path: "/features" },
  { name: "Blogs", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="pt-8 px-4 top-0 flex w-full justify-between items-center font-headline font-normal md:p-8 md:justify-around md:px-10">
      <div className="flex justify-center items-center">
        <img src={appLogo} alt="logo" className="h-auto w-14" />
        <h1 className="text-2xl font-headline">
          Bukid<span className="text-malunggay-green font-semibold">Next</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-between md:items-center md:w-6/10 md:cursor-pointer md:text-lg ">
        {navlinks.map((item) => (
          <li key={item.name}>
            <p
              onClick={() => navigate(item.path)}
              className="cursor-pointer hover:text-malunggay-green"
            >
              {item.name}
            </p>
          </li>
        ))}

        <button className="btn-neutral font-medium">Mag Sign-up</button>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden z-51" onClick={toggleMenu}>
        {isOpen ? (
          <HiOutlineX className="text-3xl text-dark-soil-brown" />
        ) : (
          <HiOutlineMenu className="text-3xl text-dark-soil-brown" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50  w-2/5 bg-rice-husk-beige shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6 mt-20 ml-6 text-dark-soil-brown text-lg">
          {navlinks.map((item) => (
            <li key={item.name}>
              <p
                onClick={() => navigate(item.path)}
                className="cursor-pointer hover:text-malunggay-green"
              >
                {item.name}
              </p>
            </li>
          ))}
          <button className="btn-neutral container">Mag Sign-up</button>
          {/* To fix this button style */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

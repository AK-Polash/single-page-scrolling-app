import React from "react";
import { Link } from "react-scroll";

const Navigation = ({ hasScrolled }) => {
  return (
    <nav
      className={
        hasScrolled
          ? "fixed left-0 top-0 w-full bg-gray-400 py-0 transition-all duration-200 ease-linear"
          : "fixed left-0 top-0 w-full bg-transparent py-3 transition-all duration-200 ease-linear"
      }
    >
      <ul className="flex items-center justify-center gap-x-6 py-3">
        <li className="cursor-pointer text-white transition-all duration-200 ease-linear hover:text-black">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer text-white transition-all duration-200 ease-linear hover:text-black">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer text-white transition-all duration-200 ease-linear hover:text-black">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

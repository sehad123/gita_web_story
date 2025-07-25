import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-70 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
      <ul className="flex gap-4 text-sm md:text-base font-semibold text-green-700">
        <li>
          <a href="#" className="hover:underline">
            Beranda
          </a>
        </li>
        <span className="text-green-500">|</span>
        <li>
          <a href="#hasil" className="hover:underline">
            Hasil Penelitian
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

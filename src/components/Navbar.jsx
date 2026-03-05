import { useState, useRef } from "react";
import { navItems } from "../constants";

export default function Navbar({ setSecao }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const mudarSecao = (secao) => {
    setSecao(secao);
    setMenuAberto(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="cursor-pointer text-lg font-medium text-gray-300 hover:text-white transition"
                onClick={() => mudarSecao(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        className="md:hidden text-2xl mr-80"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

      {menuAberto && (
        <div className="md:hidden fixed backdrop-blur-2xl rounded-lg w-50">
          {" "}
          <div className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="text-lg text-gray-300 hover:text-white transition"
                onClick={() => mudarSecao(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

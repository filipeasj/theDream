import { useState, useRef } from "react";
import { navItems } from "../constants";

export default function Navbar({ setSecao }) {
  const [somAtivo, setSomAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const audioRef = useRef(new Audio("/sounds/ambient-dream.mp3"));

  const toggleSom = () => {
    if (somAtivo) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }

    setSomAtivo(!somAtivo);
  };

  const mudarSecao = (secao) => {
    setSecao(secao);
    setMenuAberto(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">@filipeasj</span>

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

          <div className="flex items-center gap-4">
            <button
              onClick={toggleSom}
              className="text-xl hover:scale-110 transition"
            >
              {somAtivo ? "🔊" : "🔇"}
            </button>

            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden fixed right-0 top-16 w-40 backdrop-blur-2xl rounded-lg">
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

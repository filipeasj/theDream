import spinning from "../assets/spinning.mp4";
import Footer from "./Footer";

export default function HeroSection({setSecao}) {
  return (
    <>
      <div className="flex flex-col items-center mt-50">
        <video
          src={spinning}
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full object-cover z-0 opacity-20 h-screen"
        />
        <h1 className="text-5xl text-red-800 font-bold text-shadow-lg z-10">The Dream</h1>
        <span className="text-xl text-gray-500 z-10 font-semibold">Temporizador de Foco Imersivo</span>
        <div className="mt-10">
          <button className="relative px-6 py-3 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-red-800 transition-colors duration-300" onClick={() => setSecao("sonho")}>
            Entrar no sonho
          </button>
        </div>
        <span className="mt-1 text-1xl z-10 mb-50">Foque sem distrações</span>
        <Footer/>
      </div>
    </>
  );
};
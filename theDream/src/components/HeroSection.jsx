import spinning from "../assets/spinning.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <video
          src={spinning}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <h1 className="text-5xl text-red-800 font-bold z-10">The Dream</h1>
        <span className="text-xl text-gray-500 z-10">Entre no sonho</span>
        <div className="mt-10">
          <button className="z-10 px-6 py-3 cursor-pointer mb-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
            Entre no sonho
          </button>
        </div>
        <span className="mt-10 text-1xl z-10">Foque sem distrações</span>
      </div>
    </>
  );
};

export default HeroSection;

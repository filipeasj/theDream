import spinning from "../assets/spinning.mp4";

export default function HeroSection({setSecao}) {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-40">
        <video
          src={spinning}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full object-cover z-0 opacity-20"
        />
        <h1 className="text-5xl text-red-800 font-bold z-10">The Dream</h1>
        <span className="text-xl text-gray-500 z-10 font-semibold">Immersive Focus Timer</span>
        <div className="mt-10">
          <button className="relative px-6 py-3 cursor-pointer mb-2 bg-gray-800 text-white rounded-full hover:bg-red-800 transition-colors duration-300" onClick={() => setSecao("sonho")}>
            Enter the dream
          </button>
        </div>
        <span className="mt-5 text-1xl z-10">Foque sem distrações</span>
      </div>
    </>
  );
};
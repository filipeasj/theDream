import { aboutItems } from "../constants";

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-10">
        <h1 className="text-5xl text-red-800 font-bold z-10 mb-20">Sobre</h1>
        <div className="flex flex-wrap justify-center gap-5">
            {aboutItems.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-700 rounded-lg">
                    <h2 className="text-2xl text-neutral-400 font-bold mb-2">{item.label}</h2>
                    <p className="text-gray-500 font-light">{item.content}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

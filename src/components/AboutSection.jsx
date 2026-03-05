import { aboutItems } from "../constants/index";

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl text-red-800 font-bold z-10 mb-5">Sobre</h1>
        <div className="flex flex-wrap justify-center gap-5">
            {aboutItems.map((item, index) => (
                <div key={index} className="w-full mb-10 md:w-1/2 lg:w-2/5 p-4 border border-gray-700 rounded-lg">
                    <h2 className="text-xl text-neutral-400 font-bold mb-2">{item.label}</h2>
                    <p className="text-gray-500 font-light text-sm">{item.content}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

import { navItems } from "../Constants";

const Navbar = ({setSecao}) => {  
  return (
    <nav className="sticky top-0 z-50 py-3 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span>DevFilipe</span>
          </div>
          <div className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="mx-4 cursor-pointer text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setSecao(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <button className="hidden lg:flex px-4 py-2 border border-gray-500 text-gray-500 rounded-full hover:scale-105 hover:text-red-800 hover:border-red-800 ease-in-out transition duration-300">
              be focused
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

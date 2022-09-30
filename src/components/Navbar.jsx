import { FiSun, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-7 bg-blue-500 text-white flex justify-between items-center">
      <button className="text-white text-2xl">
        <FiSun className="text-white" />
      </button>
      <div className="w-[300px] relative">
        <FiSearch className="absolute bottom-3 text-white left-0 " />
        <input
          type="text"
          className="w-full outline-none pl-7 bg-transparent border-b border-white pb-2"
        />
      </div>
      <button className="flex items-center uppercase font-semibold">
        Login
        <FaUserCircle className="ml-3 text-xl" />
      </button>
    </nav>
  );
};

export default Navbar;

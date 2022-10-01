import { Link } from "react-router-dom";
import { Category, Genres } from "../constants/navigation";

const Sidebar = ({ setCategory, setPage }) => {
  return (
    <section className="w-[18%] h-screen overflow-y-scroll">
      <Link to="/">
        <div className="w-full border-b border-gray-300 py-4 flex justify-center">
          <img src="logo.png" alt="logo" className="w-[160px]" />
        </div>
      </Link>
      <div className="w-full border-b border-gray-300 py-7 ">
        <h5 className="sticky px-4 text-[14px] text-gray-500 font-medium">
          Categories
        </h5>
        <ul className="w-full mt-5">
          {Category.map((category, idx) => (
            <Link to="/">
              <li
                onClick={() => {
                  setCategory(category?.category);
                  setPage(1);
                }}
                key={idx}
                className="w-full cursor-pointer hover:bg-gray-100 transition duration-500 flex items-center text-2xl  py-2 px-4"
              >
                {category?.icon}
                <span className="text-[16px] ml-6 text-gray-500 font-normal">
                  {category?.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full border-b border-gray-300 py-7">
        <h5 className="sticky text-[14px] text-gray-500 font-medium px-4">
          Genres
        </h5>
        <ul className="w-full mt-5">
          {Genres.map((category, idx) => (
            <Link to="/">
              <li
                onClick={() => {
                  setCategory(category?.genreId);
                  setPage(1);
                }}
                key={idx}
                className="w-full cursor-pointer hover:bg-gray-100 transition duration-500 flex items-center text-2xl  py-2 px-4"
              >
                {category?.icon}
                <span className="text-[16px] ml-6 text-gray-500 font-normal">
                  {category?.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

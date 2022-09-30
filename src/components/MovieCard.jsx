import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie?.id}`}>
      <div className="w-full relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          className="w-full h-[250px] rounded-lg"
          alt={movie?.title}
        />
        <div className="py-3 text-center">
          <h3 className="text-md font-semibold w-[150px] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
            {movie?.title}
          </h3>
          <ul className="flex items-center justify-center gap-1 mt-2">
            <AiFillStar className="text-orange-400 text-xl" />
            <AiFillStar className="text-orange-400 text-xl" />
            <AiFillStar className="text-orange-400 text-xl" />
            <AiOutlineStar className="text-orange-400 text-xl" />
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

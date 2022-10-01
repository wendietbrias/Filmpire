import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, MovieCard } from "../components";
import { fetchActorInfo } from "../api";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Actors = () => {
  const { id } = useParams();
  const [actorBio, setActorBio] = useState(null);
  const [actorMovies, setActorMovies] = useState([]);
  const [page, setPage] = useState(1);

  const actorInfo = async () => {
    const { actorBioResponse, actorMoviesResponse } = await fetchActorInfo(
      id,
      page
    );
    setActorMovies(actorMoviesResponse?.cast);
    setActorBio(actorBioResponse);
  };

  useEffect(() => {
    actorInfo();
  }, [id]);

  return (
    <section className="w-full h-screen overflow-y-scroll">
      <Navbar />
      <div className="py-10 px-7">
        <div className="flex items-center gap-x-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${actorBio?.profile_path}`}
            alt={actorBio?.name}
            className="w-[350px] h-[430px] object-cover shadow-lg rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-4xl font-medium">{actorBio?.name}</h2>
            <h4 className="font-normal text-2xl mt-5">
              Born : {new Date(actorBio?.birthday).toDateString()}
            </h4>
            <p className="text-sm text-gray-600 mt-2 leading-5">
              {actorBio?.biography}
            </p>
            <div className="flex items-center mt-8">
              <button className="rounded-sm py-1 px-2 font-semibold bg-blue-500 text-white uppercase text-sm">
                IMDB
              </button>
              <Link to={`/`}>
                {" "}
                <button className="text-blue-500 flex items-center ml-7">
                  <AiOutlineArrowLeft className="mr-2" />
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-center text-4xl font-semibold">Movies</h2>
          <div className="grid grid-cols-6 gap-2 mt-7">
            {Array.isArray(actorMovies) &&
              actorMovies
                .slice(0, 12)
                .map((actor, idx) => <MovieCard key={idx} movie={actor} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actors;

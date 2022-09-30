import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetail, fetchSimiliarMovie } from "../api";
import { Navbar, Loading, MovieCard } from "../components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [credits, setCredits] = useState([]);

  const getMovieDetail = async () => {
    setLoading(true);

    const movieDetailData = await fetchMovieDetail(id);
    setDetail(movieDetailData);

    const { similarResponse, creditResponse } = await fetchSimiliarMovie(id);
    setSimilar(similarResponse.results);
    setCredits(creditResponse.cast);

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getMovieDetail();
    }
  }, [id]);

  return (
    <section className="w-full h-screen overflow-y-scroll">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="py-10 px-10">
          <div className="flex items-start gap-x-[100px]">
            <img
              className="w-[300px] h-[380px] object-cover rounded-xl shadow-lg"
              src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
              alt={detail?.title}
            />
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-center text-gray-700">
                {detail?.original_title} (
                {new Date(detail?.release_date).getFullYear()})
              </h2>
              <h5 className="text-center text-xl mt-5 text-gray-600">
                {detail?.tagline}
              </h5>
              <div className="flex items-center justify-center mt-7">
                <div className="flex items-center">
                  <ul className="flex items-center justify-center gap-1">
                    <AiFillStar className="text-orange-400 text-xl" />
                    <AiFillStar className="text-orange-400 text-xl" />
                    <AiFillStar className="text-orange-400 text-xl" />
                    <AiOutlineStar className="text-orange-400 text-xl" />
                  </ul>
                  <p className="text-md ml-3">
                    {Math.floor(detail?.vote_average)} / 10
                  </p>
                </div>
                <p className="text-xl ml-20">
                  {Math.floor(detail?.runtime)} min /{" "}
                  {new Date(detail?.release_date).toDateString()} /{" "}
                  {detail?.original_language}
                </p>
              </div>
              <h5 className=" mt-7 font-medium text-2xl">Overview</h5>
              <p className="text-md leading-6 text-gray-400 mt-2">
                {detail?.overview}
              </p>
              <h5 className=" mt-7 font-medium text-2xl">Top Cast</h5>
              <div className="grid grid-cols-6 gap-2 mt-5">
                {credits &&
                  credits?.slice(0, 6)?.map((credit, idx) => (
                    <Link to={`/actor/${credit?.id}`} key={idx}>
                      <div className="w-full">
                        <img
                          className="rounded-md"
                          src={`https://image.tmdb.org/t/p/original/${credit?.profile_path}`}
                        />
                        <div className="py-2">
                          <h5 className="text-lg">{credit?.original_name}</h5>
                          <h5 className="text-md text-gray-600">
                            {credit?.character}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-center text-gray-700">
              You might also like
            </h2>
            {Array.isArray(similar) && (
              <div className="grid grid-cols-6 mt-5 gap-2 gap-y-4">
                {similar.map((movie, idx) => (
                  <MovieCard key={idx} movie={movie} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;

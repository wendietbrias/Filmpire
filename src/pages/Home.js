import { Sidebar, Navbar, Loading } from "../components";
import MovieCard from "../components/MovieCard";
import React from "react";

const Home = React.memo(({ movies, setCategory, loading }) => {
  if (!movies) return;

  return (
    <section className="w-[82%] h-screen overflow-y-scroll">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className="w-[96%] mx-auto h-[400px] rounded-md  mt-7"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[1]?.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-full h-full text-white p-10 flex flex-col justify-end"
              style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
            >
              <h5 className="text-white font-bold text-2xl">
                {movies[1]?.title}
              </h5>
              <p className="mt-2">{movies[1]?.overview}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2 px-7 mt-7 mb-7 row-gap-4">
            {Array.isArray(movies) &&
              movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)}
          </div>
        </>
      )}
    </section>
  );
});

export default Home;

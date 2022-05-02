import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUpcomingMovies } from "../store/movie/movieSlice";
import MovieCard from "./MovieCard";
import { getLoading, getUpcomingMovies } from "../store/movie/selectors";
import UpcomingCard from "./UpcomingCard";
import LoaderCard from "./LoaderCard";

function UpcomingList() {
  const dispatch = useDispatch();

  const { loading, movies } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getUpcomingMovies(state),
  }));

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <aside className=" w-2/6 py-10 px-10 min-w-min  hidden lg:block ">
      <div className="mt-10">
        <span className="font-semibold text-gray-700 text-left flex">
          Upcoming Movies
        </span>
        <ul className="mt-4 text-gray-400 text-xs space-y-3 overflow-y-auto overflow-x-hidden max-h-screen">
          {movies.length > 0 ? movies.map((movie) => {
            return (
              <UpcomingCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                img_url={movie.poster_path}
                release_date={movie.release_date}
              />
            );
          }): <LoaderCard w={210}/>}
        </ul>
      </div>
    </aside>
  );
}

export default UpcomingList;

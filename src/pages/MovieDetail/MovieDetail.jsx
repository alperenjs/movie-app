import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../../components/MovieDetailCard";
import TrailerCard from "../../components/TrailerCard";
import { fetchMovieDetail } from "../../store/movie/movieSlice";
import { getLoading, getMovieDetail } from "../../store/movie/selectors";

function MovieDetail() {
  let params = useParams();
  let id = params.movieID;

  const dispatch = useDispatch();

  const { loading, movie } = useSelector((state) => ({
    loading: getLoading(state),
    movie: getMovieDetail(state),
  }));

  useEffect(() => {
    console.log(2);
    dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-wrap flex--movie">
      <MovieDetailCard
        id={movie.id}
        title={movie.original_title}
        overview={movie.overview}
        release_date={movie.release_date}
        runtime={movie.runtime}
        img_url={movie.poster_path}
        vote_average={movie.vote_average}
      />
      <div className="w-full  mb-2 flex justify-center content-center">
        <h3 className="flex font-bold text-4xl md:text-2xl lg:text-2xl text-gray-800 movie--title">
          Trailer
        </h3>
      </div>
      <TrailerCard id={id} />
    </div>
  );
}

export default MovieDetail;

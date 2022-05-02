import Chip from "@mui/material/Chip";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCastInfo } from "../store/movie/movieSlice";
import { getCastInfo, getLoading } from "../store/movie/selectors";
import { Link } from "react-router-dom";

function MovieDetailCard({
  id,
  title,
  overview,
  release_date,
  runtime,
  img_url,
  vote_average,
}) {
  let date = release_date;
  date = new Date(date).toLocaleDateString("en-EN");

  let img = "https://image.tmdb.org/t/p/w185/" + img_url;
  let imgBase = "https://image.tmdb.org/t/p/w185";

  const dispatch = useDispatch();

  const { loading, castInfo } = useSelector((state) => ({
    loading: getLoading(state),
    castInfo: getCastInfo(state),
  }));

  useEffect(() => {
    dispatch(fetchCastInfo(id));
  }, [dispatch, id]);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }

  return (
    <div className="w-full md:w-full  rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img className="md:w-56" src={img} alt="A Quiet Place movie poster" />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-800 movie--title">
          {title}
        </h3>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base  leading-snug truncate-overflow">
            {overview}
          </p>
        </div>
        <div className="infos">
          <div className="text-xl  text-left md:text-base lg:text-base  leading-snug truncate-overflow">
            <span>Duration(m): </span>
            <Chip label={timeConvert(runtime) || "?"} />
          </div>
          <div className="text-xl mt-1  text-left md:text-base lg:text-base  leading-snug truncate-overflow">
            <span>Rating: </span>
            <Chip label={vote_average || "?"} />
          </div>
          <div className="text-xl mt-1  text-left md:text-base lg:text-base  leading-snug truncate-overflow">
            <span>Release Date: </span>
            <Chip label={date || "?"} />
          </div>

          <div className="text-xl mt-1  text-left md:text-base lg:text-base  leading-snug truncate-overflow">
            {castInfo.slice(0, 15).map((item) => {
              return (
                <Link key={item.id} to={`/cast/${item.id}`}>
                  <Chip
                  key={item.id}
                    className="m-1 cursor-pointer"
                    label={
                      <div className="flex">
                        <img
                          src={imgBase + item.profile_path}
                          className="w-4 mr-2 rounded-3xl align-center content-center"
                          alt="cast-img"
                        />
                        <span>{item.name}</span>
                      </div>
                    }
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailCard;

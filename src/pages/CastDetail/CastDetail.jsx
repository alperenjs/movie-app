import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../../components/MovieDetailCard";
import TrailerCard from "../../components/TrailerCard";
import { fetchPersonDetail } from "../../store/movie/movieSlice";
import { getLoading, getPersonDetail } from "../../store/movie/selectors";
import Chip from "@mui/material/Chip";
import LoaderCard from "../../components/LoaderCard";

function CastDetail() {
  let params = useParams();
  let castId = params.castID;

  const dispatch = useDispatch();

  const { loading, person } = useSelector((state) => ({
    loading: getLoading(state),
    person: getPersonDetail(state),
  }));

  useEffect(() => {
    dispatch(fetchPersonDetail(castId));
  }, [dispatch, castId]);

  let date = person.birthday;
  date = new Date(date).toLocaleDateString("en-EN");

  let imgBase = "https://image.tmdb.org/t/p/w342";

if(person && !loading) {
  return (
    <div className="w-full md:w-full  rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img
          className="md:w-56"
          src={imgBase + person.profile_path}
          alt="person name"
        />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-800 movie--title">
          {person.name}
        </h3>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base  leading-snug truncate-overflow">
            {person.biography}
          </p>
        </div>
        <div className="infos">
          <div className="text-xl mt-1  text-left md:text-base lg:text-base  leading-snug truncate-overflow">
            <span>Birth Date: </span>
            <Chip label={date || "?"} />
          </div>
        </div>
      </div>
    </div>
  );
}else{
  return(
    <LoaderCard  w={"50vw"}/>
  )
}

  
}

export default CastDetail;

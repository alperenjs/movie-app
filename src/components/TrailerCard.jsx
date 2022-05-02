import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getLoading, getTrailerVideos } from "../store/movie/selectors";
import { fetchTrailerVideos } from "../store/movie/movieSlice";

function TrailerCard({ id }) {
  const dispatch = useDispatch();

  const { loading, movies } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getTrailerVideos(state),
  }));

  useEffect(() => {
    dispatch(fetchTrailerVideos(id));
  }, [dispatch]);

  return (
    <ImageList className="w-full" cols={1} rowHeight={264}>
      {movies.slice(0, 3).map((item) => (
        <ImageListItem key={item.id}>
          <iframe
            style={{ width: "100%" }}
            height="480"
            src={`http://www.youtube.com/embed/${item.key}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default TrailerCard;

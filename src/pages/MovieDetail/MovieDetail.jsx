import React from 'react'
import { useParams } from 'react-router-dom';

function MovieDetail() {
    let params = useParams();
  return (
    <div>MovieDetail for {params.movieID}</div>
  )
}

export default MovieDetail
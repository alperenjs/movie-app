import React from 'react'
import { useParams } from 'react-router-dom';

function CastDetail() {
    let params = useParams();

  return (
    <div>CastDetail for {params.castID}</div>
  )
}

export default CastDetail
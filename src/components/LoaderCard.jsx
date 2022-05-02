import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function LoaderCard({w}) {
  return (
    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
      <Skeleton variant="rectangular" width={w} height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}

export default LoaderCard;

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export default function Loading() {
  return (
    <Stack
      sx={{ color: "grey.500", padding: "20px" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
}

import React from "react";
import "./style.css";
import IconButton from "@mui/material/IconButton";

import { PlayCircle, PauseCircle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Controls() {
  const [isPlaying, setIsPlaying] = React.useState(false);


  return (
    <Box className="control-container">
      <IconButton
        onClick={() => setIsPlaying(!isPlaying)}
        size="large"
        id="action-btn"
      >
        {isPlaying ? (
          <PauseCircle fontSize="large" />
        ) : (
          <PlayCircle fontSize="large" />
        )}
      </IconButton>
    </Box>
  );
}

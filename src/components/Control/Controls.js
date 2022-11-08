import React from "react";
import "./style.scss";
import IconButton from "@mui/material/IconButton";

import { PlayCircle, PauseCircle } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Controls({ isPlaying, onPlayPause }) {
  // const [isPlaying, setIsPlaying] = React.useState(false);


  return (
    <Box className="control-container">

      {isPlaying ? (
        <IconButton
          // onClick={() => onPlayPause(false)}
          onClick={onPlayPause}
          size="large"
          id="action-btn"
          name='pause'
        >
          <PauseCircle fontSize="large" />
        </IconButton>

      ) : (
        <IconButton
          // onClick={() => onPlayPause(true)}
          onClick={onPlayPause}
          size="large"
          id="action-btn"
          name='play'
        >
          <PlayCircle fontSize="large" />
        </IconButton>

      )}
    </Box>
  );
}

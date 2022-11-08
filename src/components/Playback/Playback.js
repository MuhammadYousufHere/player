import React from "react";
import "./style.scss";
import { Add, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
const Playback = ({ onSlow, onFast, view }) => {
  return (
    <Box className="playback-container">
      <Typography className="speed">{view}x</Typography>

      <Button variant="outlined" size="small" onClick={onSlow}>
        <Remove fontSize="medium" />
      </Button>
      <Button variant="outlined" onClick={onFast}>
        <Add fontSize="medium" />
      </Button>
    </Box>
  );
};

export default Playback;

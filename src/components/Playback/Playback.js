import React from "react";
import "./style.scss";
import { Add, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
const Playback = () => {
  return (
    <Box className="playback-container">
      <Typography>1x</Typography>

      <Button variant="outlined" size="small">
        <Remove fontSize="medium" />
      </Button>
      <Button variant="outlined">
        <Add fontSize="medium" />
      </Button>
    </Box>
  );
};

export default Playback;

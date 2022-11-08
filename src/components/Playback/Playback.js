import React from "react";
import "./style.scss";
import { Add, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";

import { Box, Typography } from "@mui/material";
const Playback = ({ onSlow, onFast, view }) => {
  return (
    <Box className="playback-container">
      <Typography className="speed">{view}x</Typography>

      {/* <ButtonGroup aria-label="outlined button group"> */}
      <Button variant="outlined" size="small" onClick={onSlow}>
        <Remove fontSize="medium" />
      </Button>
      <Button variant="outlined" onClick={onFast}>
        <Add fontSize="medium" />
      </Button>
      {/* </ButtonGroup> */}



    </Box>
  );
};

export default Playback;

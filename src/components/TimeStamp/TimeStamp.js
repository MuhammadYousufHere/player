import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style.scss";
import secondsToString from "../../utils/secondsToString";
const TimeStamp = ({ currentTime = 1, duration = 100 }) => {

  return (
    <Box className="time-container">
      <Typography className="children">
        {secondsToString(currentTime)}
      </Typography>
      /<Typography className="children">{secondsToString(duration)}</Typography>
    </Box>
  );
};

export default TimeStamp;

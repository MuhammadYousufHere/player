import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style.scss";
import secondsToString from "../../utils/secondsToString";
const TimeStamp = () => {
  const currentTime = 744;
  const timeLeft = 174;
  return (
    <Box className="time-container">
      <Typography className="children">
        {secondsToString(currentTime)}
      </Typography>
      /<Typography className="children">{secondsToString(timeLeft)}</Typography>
    </Box>
  );
};

export default TimeStamp;

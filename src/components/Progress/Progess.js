import React from "react";
import { Slider } from "@mui/material";

import "./style.scss";
const Progress = () => {
  return (
    <Slider
      size="large"
      className="children"
      aria-labelledby="continuous-slider"
    />
  );
};

export default Progress;

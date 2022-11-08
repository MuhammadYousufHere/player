import React from "react";
import { Slider } from "@mui/material";

import "./style.scss";
const Progress = ({ value, max, onChange, onMouseUp, onKeyUp }) => {
  return (
    <Slider
      size="large"
      className="children"
      aria-labelledby="continuous-slider"
      value={value}
      min={1}
      max={max}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onMouseUp={onMouseUp}
      step={0.001}

    />
  );
};

export default Progress;

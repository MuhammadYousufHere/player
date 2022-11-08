import React from "react";
import { Slider, IconButton, Box } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import "./style.scss";

export default function VolumeControl({ value, onChange, mute, onMute }) {

  return (
    <Box className="volume-control">
      <IconButton
        className="children"
        size="large"
        sx={{
          padding: 0,
          margin: 0,
        }}
        onClick={onMute}

      >
        {mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </IconButton>


      <Slider
        value={value}
        step={0.01}
        onChange={onChange}
        size="small"
        min={0}
        max={1}
        sx={{
          width: "90px",
        }}
        className="volume-bar"
      />


    </Box >
  );
}

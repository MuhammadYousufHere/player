import React from "react";
import "./style.scss";
import { Slider, IconButton, Box } from "@mui/material";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function VolumeControl(props) {
  const [showVol, setShowVol] = React.useState(false);

  return (
    <Box className="volume-control">
      <IconButton
        className="children"
        size="large"
        sx={{
          padding: 0,
          margin: 0,
        }}
        onMouseOver={() => setShowVol(true)}
      >
        <VolumeUpIcon />
      </IconButton>
      {showVol && (
        <Slider
          size="small"
          sx={{
            width: "90px",
          }}
          className="volume-bar"
        />
      )}
    </Box>
  );
}

import React from "react";
import "./style.scss";
import IconButton from "@mui/material/IconButton";

import { Replay10, Forward30 } from "@mui/icons-material";

import { Box } from "@mui/material";

export default function Controls(props) {
  const sx = props.sx;
  // const [isPlaying, setIsPlaying] = React.useState(false);
  // const onSkipBack = () => {};
  // const onSkipForward = () => {};

  return (
    <Box
      sx={{
        ...sx,
      }}
      className="skip-play"
    >
      <IconButton onClick={() => { }} size="large" sx={{ padding: "0px" }}>
        <Replay10 fontSize="large" />
      </IconButton>
      <IconButton onClick={() => { }} size="large" sx={{ padding: "0px" }}>
        <Forward30 fontSize="large" />
      </IconButton>
    </Box>
  );
}

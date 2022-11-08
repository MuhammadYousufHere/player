import React from "react";
import "./style.scss";
import IconButton from "@mui/material/IconButton";

import { Replay10, Forward30 } from "@mui/icons-material";

import { Box } from "@mui/material";

export default function Seek({ onBackSeek, onForwardSeek }) {


  return (
    <Box

      className="skip-play"
    >
      <IconButton onClick={onBackSeek} size="large" sx={{ padding: "0px" }}>
        <Replay10 fontSize="large" />
      </IconButton>
      <IconButton onClick={onForwardSeek} size="large" sx={{ padding: "0px" }}>
        <Forward30 fontSize="large" />
      </IconButton>
    </Box>
  );
}

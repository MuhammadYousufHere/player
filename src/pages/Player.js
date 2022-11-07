import React from "react";
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import Playback from "../components/Playback/Playback";
import Progress from "../components/Progress/Progess";
import TimeStamp from "../components/TimeStamp/TimeStamp";
import VolumeControl from "../components/Volume/VolumeControl";
import Controls from "../components/Control/Controls";
import Skip from "../components/Skip/Skip";

const Player = (props) => {

    //   const { duration, curTime, onTimeUpdate } = props;

    //   const curPercentage = (curTime / duration) * 100;

    //   function formatDuration(duration) {
    //     return moment
    //       .duration(duration, "seconds")
    //       .format("mm:ss", { trim: false });
    //   }

    //   function calcClickedTime(e) {
    //     const clickPositionInPage = e.pageX;
    //     const bar = document.querySelector(".bar__progress");
    //     const barStart = bar.getBoundingClientRect().left + window.scrollX;
    //     const barWidth = bar.offsetWidth;
    //     const clickPositionInBar = clickPositionInPage - barStart;
    //     const timePerPixel = duration / barWidth;
    //     return timePerPixel * clickPositionInBar;
    //   }

    //   function handleTimeDrag(e) {
    //     onTimeUpdate(calcClickedTime(e));

    //     const updateTimeOnMove = (eMove) => {
    //       onTimeUpdate(calcClickedTime(eMove));
    //     };

    //     document.addEventListener("mousemove", updateTimeOnMove);

    //     document.addEventListener("mouseup", () => {
    //       document.removeEventListener("mousemove", updateTimeOnMove);
    //     });
    //   }
    return (
        <Container component="div" maxWidth="xl" sx={{
            display: "flex",
            wrap: "wrap",
            height: '100vh',
            justifyContent: "center",
            alignItems: "center",
            width: "100%",

        }}>

            <Box xs={2}>
                <Controls />
            </Box>
            <Box sx={{
                display: "flex",
                wrap: "wrap",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",

            }}>
                <Box
                    maxWidth="xs"
                    sx={{
                        display: "flex",
                        wrap: "wrap",

                        justifyContent: "center",
                        alignItems: "center",
                        width: "100% !important",

                    }}
                >
                    <Progress />
                </Box>
                <Box
                    maxWidth="xs"
                    sx={{
                        display: "flex",
                        wrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "0px",
                        padding: "0.6rem 0",
                        gap: "1rem",
                        width: '100%'
                    }}
                >
                    <Playback />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            wrap: "wrap",

                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "0px",
                            padding: "0.6rem 0",
                            gap: "1rem",
                        }}
                    >
                        <Skip />
                        <VolumeControl />
                        <TimeStamp />
                    </Box>
                </Box>
            </Box>

        </Container>
    );
};

export default Player;

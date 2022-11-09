import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import { Box, Container } from "@mui/system";
import Playback from "../components/Playback/Playback";
import Progress from "../components/Progress/Progess";
import TimeStamp from "../components/TimeStamp/TimeStamp";
import VolumeControl from "../components/Volume/VolumeControl";
import Controls from "../components/Control/Controls";
import Skip from "../components/Skip/Skip";
import { styles } from './style'
import './style.scss'
const Player = ({ tracks }) => {
    // const [audio, setAudio] = useState('')
    const [trackIndex] = useState(0);
    const [vol, setVol] = useState(0.5);
    const [isMute, setIsMute] = React.useState(true);

    const [seek, setSeek] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false);
    const { src } = tracks[trackIndex]
    const playerRef = useRef(null)
    const [duration, setDuration] = useState(0);
    const [progessObj, setProgressObj] = useState({});

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await fetch('https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3')
    //             setAudio(data)
    //             console.log(data)
    //         } catch (error) {

    //         }
    //     })()
    // }, [])
    // console.log(audio)
    const onForwardSeekHadler = () => {
        setSeek(playerRef.current.seekTo(parseFloat(progessObj?.playedSeconds + 30)))
    }
    const onBackSeekHandler = () => {
        setSeek(playerRef.current.seekTo(parseFloat(progessObj?.playedSeconds - 10)))

    }
    const onSlowHadler = () => {
        // if (playbackRate !== 0.25) {
        setPlaybackRate(playbackRate - 0.25)
        // }
    }
    const onFastHandler = () => {
        // if (playbackRate !== 2) {
        setPlaybackRate(playbackRate + 0.25)
        // }
    }
    const onMuteHandler = () => {
        setIsMute(!isMute)
    }
    return (
        <Container component="div" maxWidth="xl" sx={[styles.playerContainer, styles.common]}>

            <Box>
                <Box sx={{ visibility: 'hidden', position: 'absolute' }}>
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="auto"
                        pip
                        progressInterval={500}
                        volume={vol}
                        controls
                        muted={isMute}
                        playbackRate={playbackRate}
                        playing={isPlaying}
                        config={{ file: { forceHLS: true } }}
                        url={src}
                        onDuration={(d) => setDuration(d)}
                        onProgress={(o) => setProgressObj(o)}
                        onReady={(player) => player.seekTo(seek, 'seconds')}
                    />
                </Box>
                <Controls onPlayPause={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying} />
            </Box>
            <Box sx={[styles.wrapper, styles.common]}>
                <Box
                    maxWidth="xs"
                    sx={styles.common}
                >
                    <Progress
                        max={Math.ceil(duration)}
                        defaultValue={0}
                        value={isNaN(Math.ceil(progessObj.playedSeconds)) ? 0 : progessObj.playedSeconds}
                        onChange={(v) => playerRef.current.seekTo(parseFloat(v.target.value), "seconds")}


                    />
                </Box>
                <Box
                    maxWidth="xs"
                    sx={[styles.common_2, styles.left]}
                >
                    <Playback
                        onSlow={onSlowHadler}
                        onFast={onFastHandler}
                        view={playbackRate} />
                    {/* <Box
                        sx={styles.common_2}
                        className='action-box'
                    > */}
                    <Skip onBackSeek={onBackSeekHandler} onForwardSeek={onForwardSeekHadler} />
                    <VolumeControl
                        value={vol}
                        onChange={(e) => setVol(e.target.value)}
                        mute={isMute}
                        onMute={onMuteHandler} />
                    <TimeStamp
                        currentTime={progessObj?.playedSeconds}
                        duration={duration} />
                    {/* </Box> */}
                </Box>
            </Box>

        </Container>
    );
};

export default Player;

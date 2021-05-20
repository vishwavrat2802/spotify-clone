import "./cssPlayer/musicPlayer.css"
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PauseIcon from '@material-ui/icons/Pause';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {Howl, Howler} from 'howler';
import { useDataLayerValue } from "./DataLayer";
import { useEffect, useState } from "react";


const MiddleButton = () => {
    const [{is_playing}] = useDataLayerValue();
    console.log(is_playing);
    return(
        <>
            {is_playing?<PauseCircleFilledIcon fontSize="large"/>:<PlayCircleFilledIcon fontSize="large" className="musicplayer_icon"/>}
        </>
    )
}
const ResponsiveplayButton = () => {
    const [{is_playing}] = useDataLayerValue();
    return(
        <>
            {is_playing?<PauseIcon className="musicplayer_icon" />:<PlayArrowIcon className="musicplayer_icon" />}
        </>
    )
}
export const CenterMusicPlayer = () => {
    const [{playback,sound,is_playing},dispatch] = useDataLayerValue();
    console.log(`playback ${playback}`);
    const snd = new Howl({
        src: [`${playback}`],
        format: ['mp3'],
        autoplay: false,
        loop: false,
        volume: 0.5,
        onend: () => {
            dispatch({
                type : 'PLAY',
                is_playing: false
            })
        }
      });
    useEffect(() => {
        dispatch({
            type: 'SET_SOUND',
            sound:snd
        })
    },[playback])
    // sound.on('end',() => {
    //     console.log("song ended");
        // dispatch({
        //     type : 'PLAY',
        //     is_playing: false
        // })
    // })    
    return(
        <>
            <div className="music_Player__center">
                <ShuffleIcon className="musicplayer_green" />
                <SkipPreviousIcon className="musicplayer_icon"/>
                <div onClick={() => {
                    if(playback){
                        if(is_playing)
                            sound.pause();
                        else
                            sound.play();
                        dispatch({
                            type : 'PLAY',
                            is_playing: !is_playing
                        })
                    }
                    else alert("SORRY NO MP# FILE FOUND")
                    }}>
                <MiddleButton />
                </div>
                <SkipNextIcon className="musicplayer_icon"/>
                <RepeatIcon className="musicplayer_green" />
            </div>
        </>
    )
}
const LeftMusicPlayer = () => {
    const [{curr_playing},dispatch] = useDataLayerValue();
    console.log(curr_playing);
    let img_url= "";
    let name = null;
    let artist= null;
    let url=null;
    // console.log(curr_playing);
    img_url=curr_playing?.album?.images[2].url;
    name=curr_playing?.album?.name;
    artist = curr_playing?.album?.artists[0].name;
    url= curr_playing?.preview_url;
    useEffect(()=>{
        if(url){
            dispatch({
                type:'PLAYBACK',
                playback:url
            })
        }
    },[url])
    console.log(url);
    return(
        <div className="music_Player__left">
            <img src={img_url} />
            <div className="musicPlayer__song">
                <h6>{name}</h6>
                <p>{artist}</p>
            </div>
        </div>
    );
}
export const Musicplayer = (props) => {
    const [{playback,sound,is_playing},dispatch] = useDataLayerValue();
    let play=false;
    const snd = new Howl({
        src: [`${playback}`],
        format: ['mp3'],
        autoplay: false,
        loop: false,
        volume: 0.5,
        onend: () => dispatch({
            type : 'PLAY',
            is_playing: false
        })
      });
    useEffect(() => {
        dispatch({
            type: 'SET_SOUND',
            sound:snd
        })
    },[playback])
    return (
        <>
            <div className="music_Player hide">
                <LeftMusicPlayer />
                <CenterMusicPlayer />
                <div className="music_Player__right">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon />
                        </Grid>
                        <Grid item>
                            <VolumeUpIcon />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="music_Player disp">
                <LeftMusicPlayer />
                <div className="musicplayer_responsive_right" onClick={() => {
                    console.log("playback",playback);
                    if(sound){
                        if(is_playing)
                            sound.pause();
                        else
                            sound.play();
                        dispatch({
                            type : 'PLAY',
                            is_playing: !is_playing
                        })
                    }
                    else alert("SORRY NO MP# FILE FOUND")
                    }} >
                    <ResponsiveplayButton />
                </div>
            </div>

        </>
    )
}

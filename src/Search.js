import React from 'react'
import { Header } from "./Header";
import "./cssPlayer/search.css";
import { useDataLayerValue } from './DataLayer';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Box } from '@material-ui/core';

export function Search({spotify}) {
    const [{sound,curr_playing,searchMusic},dispatch] = useDataLayerValue();

    console.log(searchMusic);
    return (
        <>
            <div className="search_layout">
                <h2>Search</h2>
                <Header spotify={spotify} search_visible={true} icon_visible={false}/>
                <p className="search_heading">Your Searches Here....</p>
                <hr className="hr_search"></hr>
                <ul className="search_List">
                {searchMusic?.items?.map((item)=>{
                    console.log(item);
                    return(
                        <li onClick={() => {
                            if(sound){
                                sound.pause();
                                sound.seek([0]);
                                dispatch({
                                    type : 'PLAY',
                                    is_playing: false
                                }) 
                            }
                            if(curr_playing != item){
                                dispatch({
                                    type: 'SET_CURRENTPLAYING',
                                    curr_playing: item
                                })  
                                dispatch({
                                    type:'PLAYBACK',
                                    playback: item?.track?.preview_url
                                })
                            }
                        }}>
                            <AudiotrackIcon fontSize="large" className="audioIcon"/>
                            <div className="search_Music">
                                <h6>{item.name}</h6>
                                <p>{item.artists[0].name}</p>
                            </div>
                            <div className="play_Hover">
                                <Box component="span" className="playIconHover"><PlayCircleFilledIcon fontSize="large"/></Box>
                            </div>
                        </li>
                    );
                })}
                </ul>
            </div>
            
        </>
    )
}

import React from 'react'
import "./cssPlayer/dataslider.css";
import { useDataLayerValue } from './DataLayer';
export const DataSlider = ({title, list})  => {
    const [{sound,curr_playing,is_playing},dispatch] = useDataLayerValue();
    return (
        <>  
            <div className="dataslider">
                <h4 className="dataslider_title">{title}</h4>
                <div className="dataslider_outerbox">
                    {list?.items?.map((item) => {
                        if(title === "Recently Played"){
                            item=item?.track;
                        }
                        return(
                            <div className="dataslider_innerbox" onClick={() => {
                                if(sound){
                                    sound.pause();
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
                                    dispatch({
                                        type : 'PLAY',
                                        is_playing: false
                                    }) 
                                }
                            }}>
                                <img src={item?.album.images[1].url} className="head_img" alt={item?.album.name} />
                                <div><h6 style={{height:"20px", overflow:"hidden"}}>{item?.album.name}</h6>
                                <p>{item?.album.artists[0].name}</p></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

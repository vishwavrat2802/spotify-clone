import React,{useState} from 'react'
import "./cssPlayer/header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
import Box from '@material-ui/core/Box';


export function Header({spotify,search_visible,icon_visible}) {
    const [{user} , dispatch] = useDataLayerValue();
    const [track, settrack] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(track);
        spotify.searchTracks(`${track}`)
            .then(function(data) {
                console.log(data);
                dispatch({
                    type:'SEARCH_MUSIC',
                    searchMusic:data.tracks
                })
            }, function(err) {
                console.error(err);
            });
    }
    return (
        <>
            <div className="header">
                <Box component="div" className="header_left" visibility={search_visible? "visible":"hidden"}>
                    <SearchIcon/>
                    <form  onSubmit={handleSubmit}>
                        <input placeholder="Search for Artists, Songs or Albums" type="text" onChange={(evt) => settrack(evt.target.value)}/>
                    </form>
                </Box>
                <Box component="div" className="header_right"  visibility={icon_visible? "visible":"hidden"}>
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h5>{user?.display_name}</h5>
                </Box>
            </div>
        </>
    )
}

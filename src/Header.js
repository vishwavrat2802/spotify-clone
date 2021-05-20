import React from 'react'
import "./cssPlayer/header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';



export function Header({spotify}) {
    const [{user} , dispatch] = useDataLayerValue();
    return (
        <>
            <div className="header">
                <div className="header_left">
                    <SearchIcon />
                    <input placeholder="Search for Artists, Songs or Albums" type="text" />
                </div>
                <div className="header_right">
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h5>{user?.display_name}</h5>
                </div>
            </div>
        </>
    )
}

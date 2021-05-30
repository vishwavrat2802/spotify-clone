import React from 'react'
import "./cssPlayer/menuBarOption.css"
export const Menubaroption = ({title,Icon}) => {
    
    return (
        <>
            <div className="menuBarOptions">
                {Icon && <Icon className="menuBarOption_Icon"/>}
                {Icon? <h6>{title}</h6> : <p>{title}</p>}
            </div>
        </>
    )
}

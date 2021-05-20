import React from 'react';
import './Login.css';
import { Container } from "reactstrap";
import { loginUrl } from "./Spotify";
export function Login(props) {
    

    return (
        <Container>
            <div className="login">
                <img
                    src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                    alt="Spotify logo"/>
                <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </div>
        </Container>
    )
}

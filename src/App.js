import { useEffect, useState } from 'react';
import './App.css';
import { Login } from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
import { Player } from "./Player";
const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token },dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // console.log("Here is user", user);
        dispatch({
          type:'SET_USER',
          user:user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists:playlists
        })
        // console.log(playlists);
      })


      spotify.getMyRecentlyPlayedTracks({
        limit : 10
      }).then(function(data) {
          // Output items
          // console.log(data);
          dispatch({
            type:'RECENTLY_PLAYED',
            recently_played:data
          })
          dispatch({
            type:'SET_CURRENTPLAYING',
            curr_playing:data.items[0].track
          })
        }, function(err) {
          console.log('Something went wrong!', err);
        });

        spotify.getMyCurrentPlayingTrack()
        .then(function(data) {
          if(data){
            dispatch({
              type:'SET_CURRENTPLAYING',
              curr_playing:data
            });
          }
          // console.log('Now playing: ', data);
        }, function(err) {
          console.log('Something went wrong!', err);
        });

        spotify.getMyTopTracks({limit:10})
        .then(function(data) {
          if(data){
            dispatch({
              type: 'SET_TOPTRACKS',
              top_tracks:data
            });
          }
          // console.log("Top Tracks",data);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
        spotify.getNewReleases({ limit : 10, offset: 0, country: 'IN' })
        .then(function(data) {
          console.log("New Release",data);
          }, function(err) {
            console.log("Something went wrong!", err);
          });
        spotify.getMyTopArtists({limit:10})
        .then(function(data) {
          console.log("Top Artists",data);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    }
  }, []);
  return (
    <div className="app">
      {
        token? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;

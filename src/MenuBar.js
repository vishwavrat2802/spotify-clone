import "./cssPlayer/menuBar.css"
import { Menubaroption } from "./MenuBarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";
import { HashRouter as Router,NavLink } from "react-router-dom";
export const MenuBar = () => {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <Router>
            <div className="menu_Bar">
                <img className="menuBar_logo" src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="spotify-logo" />
                <NavLink to="/home" className="menu_navigation" activeClassName="navigation_active"><Menubaroption Icon={HomeIcon} title="Home" /></NavLink>
                <NavLink to="/search" className="menu_navigation" activeClassName="navigation_active"><Menubaroption Icon={SearchIcon} title="Search" /></NavLink>
                <NavLink to="/libraries" className="menu_navigation" activeClassName="navigation_active"><Menubaroption Icon={LibraryMusicIcon} title="Your Library" /></NavLink>
                <br/>
                <strong>Playlists</strong>
                <hr/>
                {playlists?.items?.map((playlist) => {
                    return(
                        <Menubaroption title={playlist.name} />
                    );
                    
                })}
            </div>
        </Router>
    );
}
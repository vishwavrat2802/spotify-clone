import "./cssPlayer/menuBar.css"
import { Menubaroption } from "./MenuBarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";
export const MenuBar = () => {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="menu_Bar">
            <img className="menuBar_logo" src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="spotify-logo" />
            <Menubaroption Icon={HomeIcon} title="Home" />
            <Menubaroption Icon={SearchIcon} title="Search" />
            <Menubaroption Icon={LibraryMusicIcon} title="Your Library" />
            <br/>
            <strong>Playlists</strong>
            <hr/>
            {playlists?.items?.map((playlist) => {
                return(
                    <Menubaroption title={playlist.name} />
                );
                
            })}
        </div>
    );
}
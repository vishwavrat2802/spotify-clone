import "./cssPlayer/menuBottom.css";
import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { HashRouter as Router,NavLink } from "react-router-dom";


export const Menubottom = (props) => {
    return (
        <>
        <Router>
            <div className="menu_Bottom">
                <div>
                    <NavLink to="/home" replace className="navigation" activeClassName="activeClass">
                        <HomeIcon/>
                        <p className="menu_Bottom_name">Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/search" replace className="navigation" activeClassName="activeClass">
                        <SearchIcon/>
                        <p className="menu_Bottom_name">Search</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/libraries" replace className="navigation" activeClassName="activeClass">
                        <LibraryMusicIcon/>
                        <p className="menu_Bottom_name">Library</p>
                    </NavLink>
                </div>
            </div>
        </Router>
        </>
    )
}

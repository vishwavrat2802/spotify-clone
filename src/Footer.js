import "./cssPlayer/footer.css";
import {Musicplayer} from "./musicPlayer";
import {Menubottom} from "./menuBottom";
export const Footer = () => {
    return(
        <>
            <div className="footer">
                <Musicplayer />
                <Menubottom />
            </div>
        </>
    );
} 
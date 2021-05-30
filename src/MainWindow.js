import "./cssPlayer/mainWindow.css";
import { Header } from "./Header";
import { DataSlider } from "./DataSlider";
import { useDataLayerValue } from "./DataLayer";

export const MainWindow = ({spotify}) => {
    const [{recently_played,top_tracks}] = useDataLayerValue();
    return(
        <div className="main_window">
            <Header spotify={spotify} search_visible={false} icon_visible={true}/>
            <DataSlider title="Top Tracks" list={top_tracks} />
            <DataSlider title="Recently Played" list={recently_played} />
        </div>
    );
}
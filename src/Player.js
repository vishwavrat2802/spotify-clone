import "./cssPlayer/player.css";
import { Grid } from '@material-ui/core';
import { MenuBar } from "./MenuBar";
import { MainWindow } from "./MainWindow";
import { Footer } from "./Footer";
export const Player = ({ spotify }) => {
    return (
        <>
            <Grid container>
                <Grid item sm={4} md={3} lg={2}>
                    <MenuBar />
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                    <MainWindow spotify={spotify}/>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}
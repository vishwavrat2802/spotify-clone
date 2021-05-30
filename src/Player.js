import "./cssPlayer/player.css";
import { Grid } from '@material-ui/core';
import { MenuBar } from "./MenuBar";
import { MainWindow } from "./MainWindow";
import { Footer } from "./Footer";
import { HashRouter as Router,Link,Switch,Route } from "react-router-dom";
import { Search } from "./Search";
import { Library } from "./Library";


export const Player = ({ spotify }) => {
    return (
        <Router>
            <div>
            <Grid container>
                <Grid item sm={4} md={3} lg={2}>
                    <MenuBar />
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                        <Switch>
                            <Route path="/home">
                                <MainWindow spotify={spotify}/>
                            </Route>
                            <Route path="/search">
                                <Search spotify={spotify}/>
                            </Route>
                            <Route path="/libraries">
                                <Library />
                            </Route>
                        </Switch>
                    
                </Grid>
            </Grid>
            <Footer/>
            </div>
        </Router>
    );
}

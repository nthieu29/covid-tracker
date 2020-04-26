import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src={process.env.PUBLIC_URL + '/apple-icon-57x57.png'}
                                 width="30px" height="30px" alt="Logo"/>
                        </IconButton>
                        <Typography variant="h6">
                            COVID-19 Tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </React.Fragment>

        );
    }
}

export default NavBar;
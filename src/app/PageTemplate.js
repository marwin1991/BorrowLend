import React from "react";
import {createMuiTheme, withStyles, MuiThemeProvider} from "@material-ui/core/styles";
import BorrowedPage from "./borrow/BorrowedPage";
import {ArrowBackIos, ArrowForwardIos, ExitToApp, Notifications, Settings, SupervisorAccount} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import {BrowserRouter, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import './style.css'
import LendPage from "./lend/LendPage";
import Hidden from "@material-ui/core/Hidden";

const theme_borrowed = createMuiTheme({
    palette: {
        primary: {
            light: '#60ad5e',
            main: '#2e7d32',
            dark: '#005005'
        },
        secondary: {
            light: '#f9683a',
            main: '#bf360c',
            dark: '#870000'
        },
    },
    typography: {
        useNextVariants: true
    }
});

const theme_lend = createMuiTheme({
    palette: {
        primary: {
            light: '#f9683a',
            main: '#bf360c',
            dark: '#870000'
        },
        secondary: {
            light: '#60ad5e',
            main: '#2e7d32',
            dark: '#005005'
        },
    },
    typography: {
        useNextVariants: true
    }
});

const LinkRef = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>);

const styles = theme => ({
    root: {},

    appBar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row'
    },

    modeSwitch: {
        flexGrow: '1',
        justifyContent: 'center',
    },

    leftToolbar: {
        flexGrow: '1',
    },

    rightToolbar: {
        flexGrow: '1',
        flexDirection: 'row-reverse',
    },
});

class PageTemplate extends React.Component {
    renderPage = (theme, targetComponentFunction) => {
        const { classes } = this.props;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Hidden xsDown>
                                <Toolbar className={classes.leftToolbar}>
                                    <IconButton aria-label="Friends">
                                        <SupervisorAccount fontSize="large"/>
                                    </IconButton>
                                    <IconButton aria-label="Notifications">
                                        <Notifications fontSize="large"/>
                                    </IconButton>
                                </Toolbar>
                            </Hidden>
                            <Hidden smUp>
                                <Toolbar className={classes.leftToolbar}>
                                    <IconButton>
                                        <MenuIcon />
                                    </IconButton>
                                </Toolbar>
                            </Hidden>
                            <Toolbar className={classes.modeSwitch}>
                                <Button component={LinkRef} to="/borrowed" size="large">
                                    BORROWED
                                </Button>
                                <Button component={LinkRef} to="/lent" size="large">
                                    LENT
                                </Button>
                            </Toolbar>
                            <Hidden xsDown>
                                <Toolbar className={classes.rightToolbar}>
                                    <IconButton aria-label="Settings">
                                        <Settings fontSize="large"/>
                                    </IconButton>
                                    <IconButton aria-label="Logout">
                                        <ExitToApp fontSize="large"/>
                                    </IconButton>
                                </Toolbar>
                            </Hidden>
                        </AppBar>
                    </div>
                    {targetComponentFunction()}
                </MuiThemeProvider>
            </div>
        );
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/borrowed"/>
                    <Route path="/borrowed" render={(props) => this.renderPage(theme_borrowed,
                        () => <BorrowedPage theme={theme_borrowed}/>)}/>
                    <Route path="/lent" render={(props => this.renderPage(theme_lend,
                        () => <LendPage theme={theme_lend}/>))}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default withRouter(withStyles(styles)(PageTemplate));
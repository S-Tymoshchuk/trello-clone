import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {connect} from "react-redux";
import {actionAppSwapStatus} from "../reducers/reducer-appbar-status";


const AppBarComponent = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();
    return (
        <div style={{marginBottom: "20px"}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => {
                        props.dispatch(actionAppSwapStatus(true))
                    }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My small project :)
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};


export default connect()(AppBarComponent);



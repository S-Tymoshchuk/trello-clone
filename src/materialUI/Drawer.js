import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";
import {actionAppSwapStatus} from "../reducers/reducer-appbar-status";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});

const TemporaryDrawer = (props) => {
    console.log(props);
    const classes = useStyles();

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemIcon><HomeTwoToneIcon/></ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon><AccountTreeTwoToneIcon/></ListItemIcon>
                    <ListItemText primary="Trello"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon><AccountBalanceTwoToneIcon/></ListItemIcon>
                    <ListItemText primary="Budget Controller"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon><SupervisorAccountTwoToneIcon/></ListItemIcon>
                    <ListItemText primary="Panel admin"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon><MonetizationOnTwoToneIcon/></ListItemIcon>
                    <ListItemText primary="Cryptocurrency tracker"/>
                </ListItem>
                <Divider/>
            </List>
        </div>
    );


    return (
        <div>
            <Drawer open={props.status.appBarStatus} onClose={() => {
                props.dispatch(actionAppSwapStatus(false));
            }}>
                {sideList("left")}
            </Drawer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        status: state.appBar
    };
};

export default connect(mapStateToProps)(TemporaryDrawer);
import React  from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {  Link } from 'react-router-dom';

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginRight: 20,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

export interface Props extends WithStyles<typeof styles> {}

export interface State {
    auth: boolean;
    anchorEl: null | HTMLElement;
}

class TripMenu extends React.Component<Props, State> {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className="class" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit"><Link to="/">Home</Link></Button>
                    <Button color="inherit"><Link to="/login">Login</Link></Button>
                    <Button color="inherit"><Link to="/register">Register</Link></Button>
                    <Button color="inherit"><Link to="/trip">Trips</Link></Button>
                    <Button color="inherit"><Link to="/friends">Friends</Link></Button>

                </Toolbar>
            </AppBar>
        )
    }
}

(TripMenu as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TripMenu);

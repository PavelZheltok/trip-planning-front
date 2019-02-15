import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Registration from './components/auth/registration'
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import TripComponent from './components/TripComponent';
import FriendsComponent from './components/FriendsComponent';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export interface IProps {

}

export interface IState {

}

class App extends Component<IProps, IState> {
    // constructor(props: any) {
    //     super(props);
    //
    //     const { dispatch } = this.props;
    //     // history.listen((location, action) => {
    //     //     // clear alert on location change
    //     //     //dispatch(alertActions.clear());
    //     // });
    // }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/trip" component={TripComponent} />
                <Route path="/friends" component={FriendsComponent} />
            </Switch>
        )
    }
}

export default App;

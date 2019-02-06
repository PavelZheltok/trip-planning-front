import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMenu from './components/menu';
import Body from './components/body';
import Login from './components/auth/login'
import Registration from './components/auth/registration'
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const HomeComponent = () => {
    return (
        <>
            <MyMenu/>
            <Body/>
        </>
    )
}

const LoginComponent = () => {
    return (
        <>
            <MyMenu/>
            <Login/>
        </>
    )
}

const RegisterComponent = () => {
    return (
        <>
            <MyMenu/>
            <Registration/>
        </>
    )
}



const TripComponent = () => {
    return (
        <>
            <MyMenu/>
            <h1>Trip</h1>
        </>
    )
}

class App extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/trip" component={TripComponent} />
            </Switch>
        )
    }
}

export default App;

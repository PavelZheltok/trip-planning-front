import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Body from './components/body';

class App extends Component {
    render() {
        return (
            <>
              <Menu/>
              <Body/>
            </>
        )
    }
}

export default App;

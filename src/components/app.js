import React, {Component} from 'react';
import axios from 'axios';
import {Button, Well} from 'react-bootstrap';
"use strict";

const ROOT_URL = "http://localhost:3000";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            status: 'log',
            username: '',
            password: ''
        }
    }

    loggedIn(x) {
        console.log("el evento es " + x);
        if (x === 'BUTTON' || x === 'SPAN') {
            this.setState({status: 'my'});
        }
    }

    changeStat(x){
      this.setState({
        status: x
      }),() => {
        console.log(x);
      }
    }

    username(x) {
        this.setState({
            username: x
        }, () => {});
    }

    password(x) {
        this.setState({
            password: x
        }, () => {});
    }

    render() {

        return (
            <div>
                <h1>Parcial 1 web</h1>
            </div>
        )
    }
}

export default App;

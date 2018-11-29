import React, { Component } from 'react';
import './app.css';
import SelectPanel from './components/SelectPanel'
import ToolBar from './components/ToolBar'
import MainBody from './components/MainBody'
import UserData from './store/UserData';

class App extends Component {

    load() {
        this.userData = new UserData();
        this.userData.requests = [{name:'Sam'}, {name:"Tim"}];
    }

    render() {
        this.load();

        return (
            <html>
                <header>
                    <link rel="stylesheet" href="index.css" />
                    <title>Rabbit Postman</title>
                </header>
                <body>
                    <ToolBar/>
                    <SelectPanel selectableItems = {this.userData.requests}/>
                    <MainBody/>
                </body>
            </html>
        );
    }
}

export default App;

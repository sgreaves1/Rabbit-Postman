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

        this.SelectedRequest = null;
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
                    <SelectPanel SelectedItem={this.SelectedRequest} selectableItems={this.userData.requests} />
                    <MainBody Request={this.SelectedRequest} />
                </body>
            </html>
        );
    }
}

export default App;

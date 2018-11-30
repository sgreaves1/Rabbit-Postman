import React, { Component } from 'react';
import './app.css';
import SelectPanel from './components/SelectPanel'
import ToolBar from './components/ToolBar'
import MainBody from './components/MainBody'
import UserData from './store/UserData';
import MessageRequest from "./store/MessageRequest";

class App extends Component {
    constructor() {
        super();
        this.selectedItemOnClick = this.selectedItemOnClick.bind(this);
    }

    load() {
        this.userData = new UserData();
        this.selectedItem = new MessageRequest("","","","","","");
        this.userData.requests = [{name:'Sam'}, {name:"Tim"}];
    }

    selectedItemOnClick(selectedItem) {
        console.log(selectedItem);
        this.selectedItem.name = selectedItem.name;
    }

    render() {
        this.load();

        return (
                <div>
                    <link rel="stylesheet" href="index.css" />
                    <ToolBar/>
                    <SelectPanel selectedItemOnClick={this.selectedItemOnClick} selectableItems={this.userData.requests} />
                    <MainBody Request={this.selectedItem} />
                </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './app.css';
import SelectPanel from './components/SelectPanel';
import ToolBar from './components/ToolBar';
import MainBody from './components/MainBody';
import {loadUser} from './store/store';
import MessageRequest from "./store/MessageRequest";
import UserData from "./store/UserData";

class App extends Component {
    constructor() {
        super();
        this.selectedItemOnClick = this.selectedItemOnClick.bind(this);

        this.load();
    }

    load() {
        this.userData = loadUser();
        this.userData = new UserData();
        this.userData.requests = [
            {name: "Tim", url: "desde", deadLetterExchange: "exchange", queue: "queue1", payload: "payload"},
            {name: "Sam", url: "sfsdf", deadLetterExchange: "exchange22",queue: "queue2", payload: "payload2"}
            ];
        this.selectedItem = new MessageRequest("","","","","","");
    }

    selectedItemOnClick(selectedItem) {
        this.selectedItem.name = selectedItem.name;
        this.selectedItem.url = selectedItem.url;
        this.selectedItem.deadLetterExchange = selectedItem.deadLetterExchange;
        this.selectedItem.queue = selectedItem.queue;
        this.selectedItem.payload = selectedItem.payload;
        this.forceUpdate();
    }

    render() {
        return (
                <div>
                    <link rel="stylesheet" href="index.css" />
                    <ToolBar/>
                    <SelectPanel selectedItemOnClick={this.selectedItemOnClick} selectableItems={this.userData.requests} />
                    <MainBody request={this.selectedItem}/>
                </div>
        );
    }
}

export default App;

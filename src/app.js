import React, { Component } from 'react';
import './app.css';
import SelectPanel from './components/SelectPanel';
import ToolBar from './components/ToolBar';
import MainBody from './components/MainBody';
import {loadUser, storeUser} from './store/store';
import MessageRequest from "./store/MessageRequest";
import UserData from "./store/UserData";

class App extends Component {
    constructor(props) {
        super(props);
        this.selectedItemOnClick = this.selectedItemOnClick.bind(this);
        this.load();
    }

    state = {
        selectedRequest: new MessageRequest("","","","","","")
    };

    load() {
        this.userData = loadUser();
        console.log(this.userData);
        // this.userData.requests = [
        //     {name: "Tim", url: "desde", deadLetterExchange: "exchange", queue: "queue1", payload: "payload"},
        //     {name: "Sam", url: "sfsdf", deadLetterExchange: "exchange22", queue: "queue2", payload: "payload2"}
        //     ];
    }

    selectedItemOnClick = (selectedItem) => {
        this.setState({
            selectedRequest: selectedItem
        });
    };

    saveButtonOnClick = () => {
        console.log('here');
        storeUser(this.userData);
    };

    render() {
        return (
                <div>
                    <link rel="stylesheet" href="index.css" />
                    <ToolBar/>
                    <SelectPanel selectedItemOnClick={this.selectedItemOnClick} selectableItems={this.userData.requests} />
                    <MainBody request={this.state.selectedRequest} saveButtonOnClick={this.saveButtonOnClick}/>
                </div>
        );
    }
}

export default App;

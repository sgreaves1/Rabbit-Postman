import React from "react";
import MessageRequest from "../store/MessageRequest";

class MainBody extends React.Component {
    constructor() {
        super();
        this.state = {
            request: new MessageRequest("","","","","","")
        };
        this.changeRequest = this.changeRequest.bind(this);
    }

    changeRequest() {
        this.setState({
            request:  new MessageRequest("safdasf","","","","","")
        })
    }

    render()
    {
        return <div className="mainBody">
            <select>
                <option value="post">Post</option>
                <option value="get">Get</option>
            </select>

            <input type="text" defaultValue={this.state.request.name} id="rabbituri" placeholder="Rabbit Url"/>
            <input type="text" id="deadLetterExchange" placeholder="Dead Letter Exchange"/>

            <button className="saveAsDropdownButton" >V</button>
            {/*onClick="window.saveAsDropdownButtonClick()"*/}
            <button className="saveButton" >Save</button>
            {/*onClick="window.save()"*/}
            <ul id="saveAsDropdownList" hidden={true}>
                <li>
                    <button >Save As...</button>
                    {/*onClick="window.save()"*/}
                </li>
            </ul>
            <button className="sendButton" >Send</button>
            {/*onClick="window.send()"*/}
            <br/>
            <input type="text" id="queue" placeholder="Queue"/>
            <br/>
            <textarea id="payload" placeholder="Payload"></textarea>
        </div>
    }
}

export default MainBody;

//     document.getElementById("").value = item.url;
//     document.getElementById("payload").value = item.payload;
//     document.getElementById("deadLetterExchange").value = item.deadLetterExchange;
//     document.getElementById('queue').value = item.queue;
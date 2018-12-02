import React from "react";

class MainBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.request.name
        };
        this.changeRequest = this.changeRequest.bind(this);
    }

    changeRequest(e) {
        this.setState({
            name: e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.request.name
        });
    }

    render()
    {
        return <div className="mainBody">
            <select>
                <option value="post">Post</option>
                <option value="get">Get</option>
            </select>

            <input type="text" value={this.state.name} onChange={this.changeRequest.bind(this)} id="rabbituri" placeholder="Rabbit Url"/>
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
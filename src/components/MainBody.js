import React from "react";

class MainBody extends React.Component {
    state = {
        name: this.props.request.name,
        url: this.props.request.url,
        deadLetterExchange: this.props.request.deadLetterExchange,
        queue: this.props.request.queue,
        payload: this.props.request.payload,
    };

    changeRequest(e) {
        this.setState({
            name: e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.request.name,
            url: nextProps.request.url,
            deadLetterExchange: nextProps.request.deadLetterExchange,
            queue: nextProps.request.queue,
            payload: nextProps.request.payload,
        });
    }

    send = () => {
        console.log('sending');
    };

    render()
    {
        return <div className="mainBody">
            <select>
                <option value="post">Post</option>
                <option value="get">Get</option>
            </select>

            <input type="text" value={this.state.url} onChange={this.changeRequest.bind(this)} id="rabbituri" placeholder="Rabbit Url"/>
            <input type="text" value={this.state.deadLetterExchange} id="deadLetterExchange" placeholder="Dead Letter Exchange"/>

            <button className="saveAsDropdownButton">V</button>
            {/*onClick="window.saveAsDropdownButtonClick()"*/}
            <button className="saveButton" onClick={this.props.saveButtonOnClick.bind()}>Save</button>
            {/*onClick="window.save()"*/}
            <ul id="saveAsDropdownList" hidden={true}>
                <li>
                    <button >Save As...</button>
                    {/*onClick="window.save()"*/}
                </li>
            </ul>
            <button className="sendButton" onClick={this.send}>Send</button>
            {/*onClick="window.send()"*/}
            <br/>
            <input type="text" value={this.state.queue} id="queue" placeholder="Queue"/>
            <br/>
            <textarea value={this.state.payload} id="payload" placeholder="Payload"></textarea>
        </div>
    }
}

export default MainBody;
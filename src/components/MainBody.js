import React from "react";

class MainBody extends React.Component {
    render()
    {
        return <div className="mainBody">
            <select>
                <option value="post">Post</option>
                <option value="get">Get</option>
            </select>

            <input type="text" id="rabbituri" placeholder="Rabbit Url"/>
            <input type="text" id="deadLetterExchange" placeholder="Dead Letter Exchange"/>

            <button className="saveAsDropdownButton" onClick="window.saveAsDropdownButtonClick()">V</button>
            <button className="saveButton" onClick="window.save()">Save</button>
            <ul id="saveAsDropdownList" hidden="true">
                <li>
                    <button onClick="window.save()">Save As...</button>
                </li>
            </ul>
            <button className="sendButton" onClick="window.send()">Send</button>
            <br/>
            <input type="text" id="queue" placeholder="Queue"/>
            <br/>
            <textarea id="payload" placeholder="Payload"></textarea>
        </div>
    }
}

export default MainBody;
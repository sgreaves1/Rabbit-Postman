import React from "react";

class SelectPanel extends React.Component {
    render()
    {
        return <div className="selectPanel" id="selectPanel">
            props.requests.forEach((item) => {
            <button>item.name</button>
        }
        </div>;
    }
}

export default SelectPanel;
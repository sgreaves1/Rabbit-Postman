import React from "react";

class SelectPanel extends React.Component {
    render()
    {
        const buttons = this.props.selectableItems.map((items) =>
            <button>{items.name}</button>
        );

        return <div className="selectPanel" id="selectPanel">
            {buttons}
        </div>;
    }
}

export default SelectPanel;
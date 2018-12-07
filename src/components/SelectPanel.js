import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class SelectPanel extends React.Component {

    handleRightClick(e, data) {
        console.log('hahahha');
    }

    render()
    {
        const buttons = this.props.selectableItems.map((item) =>

            <div>

                <ContextMenuTrigger id="some_unique_identifier">
                    <button onClick={this.props.selectedItemOnClick.bind(null, item)}>{item.name}</button>
                </ContextMenuTrigger>

                <ContextMenu id="some_unique_identifier">
                    <MenuItem data={{foo: 'bar'}} onClick={this.handleRightClick}>
                        Delete
                    </MenuItem>
                </ContextMenu>

            </div>


        );

        return <div className="selectPanel" id="selectPanel">
            {buttons}
        </div>;
    }
}

export default SelectPanel;
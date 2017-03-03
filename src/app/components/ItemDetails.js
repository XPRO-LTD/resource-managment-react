/**
 * TCD Software
 * Created by Dmitrij Rysanow on 03.03.17.
 */

import React from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import SettingsTab from "./SettingsTab";
import InfoTab from "./InfoTab";

const tabs = [{
    Id: 0,
    Title: "info",
    Component: InfoTab,
}, {
    Id: 1,
    Title: "settings",
    Component: SettingsTab
}];

class ItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

    }
    handleChange = (value) => {
        console.log("Change state", value);
        this.setState({
            value: value
        });
    };

    render() {
        const tabItems = tabs.map((tab, i) => {
            return (
                <Tab key={i} label={tab.Title} value={tab.Id}>{React.createElement(tab.Component)}</Tab>
            )
        });

        return (
            <Tabs value={this.state.value} initialSelectedIndex={0} onChange={this.handleChange}>
                {tabItems}
            </Tabs>
        )

    }
}

export default ItemDetails;
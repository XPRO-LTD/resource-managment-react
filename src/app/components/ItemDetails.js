/**
 * TCD Software
 * Created by Dmitrij Rysanow on 03.03.17.
 */

import React, {Component} from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import SettingsTab from "./SettingsTab";
import InfoTab from "./InfoTab";

const tabsDescription = [{
        Id: 0,
        Title: "info",
        Component: InfoTab
    }, {
        Id: 1,
        Title: "settings",
        Component: SettingsTab
    }];

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value
        });
    };

    tabsMap = (tab, i) => {
        return (
            <Tab key={i} label={tab.Title} value={tab.Id}>{React.createElement(tab.Component)}</Tab>
        )
    };

    render() {
        const tabItems = tabsDescription.map(this.tabsMap);

        return (
            <Tabs value={this.state.value} initialSelectedIndex={0} onChange={this.handleChange}>
                {tabItems}
            </Tabs>
        )

    }
}

export default ItemDetails;
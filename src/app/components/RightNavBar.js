/**
 * TCD Software
 * Created by Dmitrij Rysanow on 02.03.17.
 */
import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import SettingsTab from './RightNavBarTabs/SettingsTab';
import InfoTab from './RightNavBarTabs/InfoTab';

const tabs = [{
    Id: 0,
    Title: "info",
    Component: InfoTab,
}, {
    Id: 1,
    Title: "settings",
    Component: SettingsTab
}];

class RightNavBar extends React.Component {
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
        <Card>
            <CardTitle title="Item details" subtitle="blablabla" />
            <CardText>
                <Tabs value={this.state.value} initialSelectedIndex={0} onChange={this.handleChange}>
                    {tabItems}
                </Tabs>
            </CardText>
        </Card>
        )
    }
}

export default RightNavBar;
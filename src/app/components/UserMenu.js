/**
 *  github: Chestnut-Rice
 *  Created by Przemyslaw Skwierczynski on 06.03.2017
 **/
import React, { Component } from 'react';
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const userSettingsButton = "User Settings";
const userLogoutButton = "Logout";

const CardHeaderData = {
    "title": <b>User Name</b>,
    "subtitle": "custom@email.com",
    "avatar": "https://s-media-cache-ak0.pinimg.com/originals/49/5e/09/495e0997e0f0682ceca2ffedddf85e06.jpg"
};

const styleSettingsButton = {
    "margin": "4px 12px 4px 12px"
};
const styleLogoutButton = {
    "margin": "4px 12px 4px 12px",
    "float": "right"
};

const clearFloat = {
    "clear": "float"
};

class UserMenu extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={ CardHeaderData.title }
                    subtitle={ CardHeaderData.subtitle }
                    avatar={<Avatar src={ CardHeaderData.avatar } size="80"/>}/>
                <Divider/>
                <CardActions>
                    <RaisedButton label={ userSettingsButton } style={styleSettingsButton}/>
                    <RaisedButton label={ userLogoutButton } style={styleLogoutButton}/>
                    <div style={clearFloat}></div>
                </CardActions>
            </Card>
        );
    }
}

export default UserMenu;
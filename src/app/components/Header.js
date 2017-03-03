import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import UserMenu from './UserMenu';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'

class Header extends Component {
    render() {
        return (
            <AppBar title="TITLE" titleStyle={{"font-weight": 2}}
                    iconElementRight={<UserMenu/>}
                />
        );
    }
}

export default Header;
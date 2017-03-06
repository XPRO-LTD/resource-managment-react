import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from './SearchBar'
import UserMenu from './UserMenu';

import '../../styles/Header.css';

const applicationName = "Application";

class Header extends Component {
    SearchBarWithBackground (){
        return <div style={{width: "0px"}}>
                    {applicationName}
                    <div className="searchBackground">
                    <SearchBar/>
                    </div>
                </div>
    }
    render() {
        return (
            <AppBar title={this.SearchBarWithBackground()}
                    children={<UserMenu/>}
                />
        );
    }
}

export default Header;
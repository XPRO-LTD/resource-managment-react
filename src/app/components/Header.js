/* github: Chestnut-Rice */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from './SearchBar'
import UserButton from './UserButton';

import '../../styles/Header.css';

const applicationName = "Application";

class Header extends Component {
    SearchBarWithBackground (){
        return <div className="searchBarFix">
                    {applicationName}
                    <div className="searchBackground">
                    <SearchBar/>
                    </div>
                </div>
    }
    render() {
        return (
            <AppBar title={this.SearchBarWithBackground()}
                    children={<UserButton/>}
                />
        );
    }
}

export default Header;
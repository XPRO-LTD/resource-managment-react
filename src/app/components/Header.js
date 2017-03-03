import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar'

class Header extends Component {
    SearchBarWithBackground (){
        return <div>
                    {"Application"}
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
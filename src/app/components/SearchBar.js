import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <Search color="white" className="searchBarIcon"/>
                <TextField underlineShow={false} hintText="Search here" hintStyle={{color: "white"}} inputStyle={{width: '600px', color: 'white'}}/>
            </div>
        );
    }
}

export default SearchBar;
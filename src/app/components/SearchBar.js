/* github: Chestnut-Rice */
import React, { Component } from 'react';
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField';

import '../../styles/SearchBar.css';

const hintStyle = {
    color: "white"
};

const inputStyle = {
    width: '600px',
    color: 'white'
};

const hintText = "Search here";

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <Search color="white" className="searchBarIcon"/>
                <TextField underlineShow={false} hintText={hintText} hintStyle={hintStyle} inputStyle={inputStyle}/>
            </div>
        );
    }
}

export default SearchBar;
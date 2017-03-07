/**
 *  github: Chestnut-Rice
 *  Created by Przemyslaw Skwierczynski on 06.03.2017
 **/
import React, { Component } from 'react';
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField';

import '../../styles/SearchBar.css';

const hintStyle = {
    color: "white"
};

const inputStyle = {
    //hardcoded searchbar width
    width: '600px',
    color: 'white'
};

const hintText = "Search here";

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <Search color="white" className="searchBarIcon"/>
                <TextField underlineShow={ false } hintText={ hintText } hintStyle={ hintStyle } inputStyle={ inputStyle }/>
            </div>
        );
    }
}

export default SearchBar;
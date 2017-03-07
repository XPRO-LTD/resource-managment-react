import React, { Component } from 'react';
import '../../styles/MainAreaGroupName.css';

class MainAreaGroupName extends Component {

    render(){
        const {groupName} = this.props;
        return (
            <span className="MainAreaGroupName">{ groupName }</span>
        );
    }

}



export default MainAreaGroupName;
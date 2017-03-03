import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import MainAreaGrouped from './MainAreaGrouped'
import MainAreaGroupName from './MainAreaGroupName'
import '../../styles/MainAreaGroup.css';

class MainAreaGroup extends Component {

    render(){
        return (
        <div className="MainAreaGroup">
            <MainAreaGroupName groupName={"First Group"}/>
            <Paper className="PaperWrapper">
                <MainAreaGrouped/>
            </Paper>
        </div>
    );
    }

}



export default MainAreaGroup;
import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import MainAreaGroup from './MainAreaGroup'
import MainAreaGroupName from './MainAreaGroupName'
import '../../styles/MainArea.css';

class MainArea extends Component {

    render(){
        return (
        <div className="MainAreaGroup">
            <MainAreaGroupName groupName={"First Group"}/>
            <Paper className="PaperWrapper">
                <MainAreaGroup/>
            </Paper>
        </div>
    );
    }

}



export default MainArea;
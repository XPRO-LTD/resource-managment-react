import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import RightNavBar from './components/RightNavBar'
import MainAreaGroup from './components/MainAreaGroup'
import FilterMenu from './components/FilterMenu'

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilterMenu: false
        };
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    toggleFilterMenu() {
        this.setState({showFilterMenu: !this.state.showFilterMenu});
    }
    render() {
        return (
            <div>
                <Header toggleFilterMenu={() => {this.toggleFilterMenu()}}/>
                <div>
                    <div style={{'display': 'flex','height': '94vh'}}>
                        <div style={{'width': '73%'}}>
                            <MainAreaGroup/>
                        </div>
                        <div style={{'width': '27%'}}>
                            <RightNavBar/>
                        </div>
                    </div>
                    <FilterMenu showFilterMenu={this.state.showFilterMenu}/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default App;
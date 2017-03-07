import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import RightNavBar from './components/RightNavBar'
import MainArea from './components/MainArea'

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div style={{'display': 'flex','height': '94vh'}}>
                        <div style={{'width': '67%'}}>
                            <MainArea/>
                        </div>
                        <div style={{'width': '33%'}}>
                            <RightNavBar/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default App;
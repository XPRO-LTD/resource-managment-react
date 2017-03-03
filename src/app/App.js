import React, { Component } from 'react';

import '../styles/App.css';
import MainArea from './components/MainArea'

import injectTapEventPlugin from 'react-tap-event-plugin';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>This is starting project!</h1>
                </div>
                <div className="App-intro">
                    <MainArea/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
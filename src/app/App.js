import React, { Component } from 'react';
import '../styles/App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import RightNavBar from './components/RightNavBar'

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App-intro">
                    <div style={{'display': 'flex','height': '94vh'}} className="App-intro">
                        <div style={{'width': '67%'}}>
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
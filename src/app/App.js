import React, { Component } from 'react';
import '../styles/App.css';
import ClockContainer from './containers/ClockContainer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import FilterMenu from './components/FilterMenu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <div className="App-header">
                    <h1>This is starting project!</h1>
                </div>
                <div className="App-intro">
                    <ClockContainer></ClockContainer>
                    <FilterMenu></FilterMenu>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
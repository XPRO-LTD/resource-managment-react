import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header'
import ClockContainer from './containers/ClockContainer'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header/>
            </MuiThemeProvider>
        );
    }
}

export default App;
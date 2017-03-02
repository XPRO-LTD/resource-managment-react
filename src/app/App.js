import React, { Component } from 'react';
import '../styles/App.css';
import ClockContainer from './containers/ClockContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightNavBar from './components/RightNavBar';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <div className="App-header">
                    <h1>This is starting project!</h1>
                </div>
                <div className="App-intro">
                    <RightNavBar></RightNavBar>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
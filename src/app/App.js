import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightNavBar from './components/RightNavBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <div className="App-header">
                    <h1>This is starting project!</h1>
                </div>
                <div style={{'display': 'flex','height': '94vh'}} className="App-intro">
                    <div style={{'width': '67%'}}></div>
                    <div style={{'width': '33%'}}>
                        <RightNavBar></RightNavBar>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
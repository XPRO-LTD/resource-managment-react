import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightNavBar from './components/RightNavBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

const style = {
    height: '100%',
    width: '600px',
    float: 'right'
};
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
                <div className="App-intro">
                    <div style={ style }>
                        <RightNavBar></RightNavBar>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
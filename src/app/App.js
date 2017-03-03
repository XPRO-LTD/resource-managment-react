import React, { Component } from 'react';
import '../styles/App.css';
import ClockContainer from './containers/ClockContainer'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>This is starting project!</h1>
                </div>
                <div className="App-intro">
                    <ClockContainer></ClockContainer>
                </div>
            </div>
        );
    }
}

export default App;
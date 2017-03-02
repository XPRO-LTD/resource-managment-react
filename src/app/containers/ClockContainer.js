import React, { Component } from 'react';
import Clock from '../components/Clock'

class ClockContainer extends Component {
    constructor(props){
        super(props);
        this.state = { date : [] };
    }

    createRandomHash = () =>{
        let arr = [getRandomHex(),getRandomHex(),getRandomHex()];
        return "#" + arr.join("");

        function getRandomHex() {
            return Math.floor(Math.random() * (16 - 1) + 1).toString(16);
        }
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    tick(){
        let date = new Date();
        this.setState({
            date: date.getSeconds()
        })
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
        return (
            <Clock seconds={this.state.date} color={ this.createRandomHash()}/>
        );
    }
}

export default ClockContainer;
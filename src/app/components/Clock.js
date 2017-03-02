import React, { Component } from 'react';
import Number from './Number'

class Clock extends Component {
    renderNumbers(second, color){
        return <Number data={ second } color={ color }></Number>
    }

    render(){
        return (
            <div>
                { this.renderNumbers(this.props.seconds, this.props.color) }
            </div>
        );
    }
}

export default Clock;
/**
 *  github: Chestnut-Rice
 *  Created by Przemyslaw Skwierczynski on 06.03.2017
 **/
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import UserMenu from './UserMenu';

import '../../styles/UserButton.css';

const popoverStyle = {
    "margin-top": 12
};

class UserButton extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        })
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <Avatar className="UserButton" src="https://s-media-cache-ak0.pinimg.com/originals/49/5e/09/495e0997e0f0682ceca2ffedddf85e06.jpg"
                        onClick={ this.handleTouchTap }
                />
                <Popover style={ popoverStyle } className="arrowUp"
                    open={ this.state.open }
                    anchorEl={ this.state.anchorEl }
                    onRequestClose={ this.handleRequestClose }
                    animation={ PopoverAnimationVertical }>
                    <UserMenu/>
                </Popover>
            </div>
        );
    }
}

export default UserButton;
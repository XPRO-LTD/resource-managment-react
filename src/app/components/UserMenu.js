import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'

class UserMenu extends Component {

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
                <Avatar className="UserMenu" src="https://s-media-cache-ak0.pinimg.com/originals/49/5e/09/495e0997e0f0682ceca2ffedddf85e06.jpg"
                        onClick={this.handleTouchTap}
                />
                <Popover style={{"margin-top": 12}} className="arrowUp"
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}>
                    <Menu>
                        <MenuItem primaryText="Lorem ipsum" />
                        <MenuItem primaryText="Sit" />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

export default UserMenu;
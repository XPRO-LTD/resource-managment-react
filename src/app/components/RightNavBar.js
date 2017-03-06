/**
 * TCD Software
 * Created by Dmitrij Rysanow on 02.03.17.
 */
import React, { Component } from 'react';

import {Card, CardMedia} from "material-ui/Card";
import AppBar from "material-ui/AppBar";

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Image from "../../../public/nature-600-337.jpg";
import MenuItem from 'material-ui/MenuItem';
import {red500} from "material-ui/styles/colors";

import ItemDetails from "./ItemDetails";

const itemName = "Title";

class RightNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            optionsOpened: false
        };
        this.menuOptions = [{
            option: "delete",
        }, {
            option: "add"
        }];
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        const menuOptionsView = this.menuOptions.map((item, index) => {
            return <MenuItem key={index} primaryText={item.option}/>
        });
        const appBarContextMenu = <IconButton>
            <MoreVertIcon onTouchTap={this.handleTouchTap} />
        </IconButton>;
        const menu = <Menu>{menuOptionsView}</Menu>;
        const popover = <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
        >{menu}</Popover>;

        return (
            <Card zDepth={ 3 } open={ true } style={{ 'height':'100%' }}>
                <AppBar
                    title={ itemName }
                    style={{'backgroundColor': red500}}
                    showMenuIconButton={ false }
                    iconElementRight={ appBarContextMenu }
                />
                {popover}
                <CardMedia>
                    <img alt="Item" role="presentation" src={ Image }/>
                </CardMedia>
                <ItemDetails/>
            </Card>

        )
    }
}

export default RightNavBar;
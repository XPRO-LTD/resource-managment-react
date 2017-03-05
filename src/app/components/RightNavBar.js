/**
 * TCD Software
 * Created by Dmitrij Rysanow on 02.03.17.
 */
import React, { Component } from 'react';
import {Card, CardMedia} from "material-ui/Card";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Image from "../../../public/nature-600-337.jpg";
import {red500} from "material-ui/styles/colors";
import ItemDetails from "./ItemDetails";

const appBarContextMenu = <IconButton><NavigationClose /></IconButton>;
class RightNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

    }

    render() {
        return (
            <Card zDepth={3} open={true} style={{'height':'100%'}}>
                <AppBar
                    title="Title"
                    style={{'backgroundColor': red500}}
                    iconElementRight={appBarContextMenu}
                />
                <CardMedia>
                    <img alt="Item" role="presentation" src={Image}/>
                </CardMedia>
                <ItemDetails/>
            </Card>

        )
    }
}

export default RightNavBar;
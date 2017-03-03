import React, { Component } from 'react';

import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

import Avatar from 'material-ui/Avatar'
import Image from '../../../public/uxceo-128.jpg'

import Chip from 'material-ui/Chip'
import {blue300, indigo900} from 'material-ui/styles/colors';

import FloatingActionButton from 'material-ui/FloatingActionButton'


var  rows = [
    {
        avatarStyle : {
            width: "10px"
        },
        Image,
        itemNameStyle: {
            width: "150px"
        },
        itemName: "First Item Name"
    },
    {
        avatarStyle : {
            width: "10px"
        },
        Image,
        itemNameStyle: {
            width: "150px"
        },
        itemName: "First Item Name"
    },
    {
        avatarStyle : {
            width: "10px"
        },
        Image,
        itemNameStyle: {
            width: "150px"
        },
        itemName: "First Item Name"
    }
];

class MainAreaItems extends Component {

    renderTableRows(tableRow){
        const {avatarStyle, Image, itemNameStyle, itemName} = tableRow;
        return (
            <TableRow hoverable={true} striped={true}>

                <TableRowColumn style={ avatarStyle }>
                    <Avatar
                        src={Image}
                        size={30}
                    />
                </TableRowColumn>

                <TableRowColumn style={ itemNameStyle }>
                    <b> { itemName } </b>
                </TableRowColumn>

                <TableRowColumn> User </TableRowColumn>

                <TableRowColumn>
                    <Chip
                        backgroundColor={blue300}
                        labelColor={"white"}>
                        <Avatar size={32} color={blue300} backgroundColor={indigo900} style={{ "color": "white"}}>
                            I
                        </Avatar>
                        Colored Chip
                    </Chip>
                </TableRowColumn>

                <TableRowColumn>
                    Tags
                </TableRowColumn>
                <TableRowColumn>
                    Tags
                </TableRowColumn>
                <TableRowColumn>
                    Tags
                </TableRowColumn>
                <TableRowColumn>
                    Tags
                </TableRowColumn>
                <TableRowColumn>
                    Tags
                </TableRowColumn>
                <TableRowColumn style={{"float": "right"}}>
                    <FloatingActionButton mini={true} disabled={true}>
                    </FloatingActionButton>
                </TableRowColumn>
            </TableRow>
        );
    }

    render(){
        return (
            <TableRow hoverable={true} striped={true}>

            </TableRow>
        );

    }

}



export default MainAreaItems;
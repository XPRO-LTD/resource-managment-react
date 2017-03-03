import React, { Component } from 'react';

import {Table, TableBody } from 'material-ui/Table';

import MainAreaItems from './MainAreaItems'

import createTableRow from './MainAreaItems'

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

class MainAreaGrouped extends Component {

    render(){
        const MainAreaItems = rows.map(createTableRow);
        return (
            <Table>
                <TableBody displayRowCheckbox={ false }>
                    { MainAreaItems }
                </TableBody>
            </Table>
        );
    }

}



export default MainAreaGrouped;
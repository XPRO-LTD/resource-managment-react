import React from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

import Avatar from 'material-ui/Avatar'
import Image from '../../../public/uxceo-128.jpg'

import Chip from 'material-ui/Chip'
import {blue300, indigo900} from 'material-ui/styles/colors';

const createTableRow = function(row, i){
    const {avatarStyle, itemNameStyle, itemName} = row;
    return <TableRow hoverable={true} striped={true} key={i}>

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
    </TableRow>
};

export default createTableRow;
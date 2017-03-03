import React, { Component } from 'react';

import {Table, TableBody } from 'material-ui/Table';

import MainAreaItems from './MainAreaItems'

class MainAreaGrouped extends Component {

    render(){
        return (
            <Table>
                <TableBody displayRowCheckbox={ false }>
                    <MainAreaItems/>
                </TableBody>
            </Table>
        );
    }

}



export default MainAreaGrouped;
import React from 'react'
import FilterMenuButton from './FilterMenuButton'
import FilterMenuDrawer from './FilterMenuDrawer'

class FilterMenu extends React.Component {

    state = {
        showFilterMenu: false
    };
    render(){
        let element;
        if (!this.state.showFilterMenu) {
            element = (<FilterMenuButton openFilterMenu={() => {this.setState({showFilterMenu: true})}}></FilterMenuButton>);
        } else {
            element = (<FilterMenuDrawer closeFilterMenu={() => {this.setState({showFilterMenu: false})}} showFilterMenu={this.state.showFilterMenu}></FilterMenuDrawer>);
        }
        return element;
    }
}

export default FilterMenu;
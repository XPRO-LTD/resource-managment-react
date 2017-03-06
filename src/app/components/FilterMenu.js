import React from "react";

import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import Tags from "./Tags";
import WorkspaceSelector from "./WorkspaceSelector";

const styles = {
    drawerStyle: {
        top: '65px'
    }
};

class FilterMenu extends React.Component {
    render() {
        return (
            <Drawer width={350} containerStyle={styles.drawerStyle} open={this.props.showFilterMenu}>
                <WorkspaceSelector/>
                <Divider/>
                <Tags/>
            </Drawer>
        );
    }
}

FilterMenu.propTypes = {
    showFilterMenu: React.PropTypes.bool
};

export default FilterMenu;
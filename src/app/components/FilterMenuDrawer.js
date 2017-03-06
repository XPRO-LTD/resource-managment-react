import React from "react";
import "../../styles/FilterMenuDrawer.css";

import Close from "material-ui/svg-icons/navigation/close";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import {List, ListItem} from 'material-ui/List';
import Subheader from "material-ui/Subheader";
import Chip from "material-ui/Chip";
import Add from "material-ui/svg-icons/content/add";
import KeyboardArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import TextField from "material-ui/TextField";
import Tags from "./Tags";

import {amber600, yellow600, grey400} from "material-ui/styles/colors";

const styles = {
    drawerStyle: {
        top: '65px',
        width: 'auto'
    }
};

class FilterMenuDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workspaces: {
                0: {
                    id: 0,
                    name: "first"
                },
                1: {
                    id: 1,
                    name: "second"
                }
            },
            selectedWorkspace: 0
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Drawer containerStyle={styles.drawerStyle} open={this.props.showFilterMenu}>
                <List>
                    <Subheader>Workspaces</Subheader>
                    <ListItem
                        primaryText={this.state.workspaces[this.state.selectedWorkspace].name}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems=
                            {Object.entries(this.state.workspaces).map(([id, workspace]) =>  {
                                return (
                                    <ListItem
                                        key={workspace.id}
                                        primaryText={workspace.name}
                                        leftIcon={workspace.id == this.state.selectedWorkspace ? <KeyboardArrowRight /> : null}
                                    />
                                )
                            })}
                    />
                </List>
                <Tags></Tags>
            </Drawer>
        );
    }
}

FilterMenuDrawer.propTypes = {
    showFilterMenu: React.PropTypes.bool,
    closeFilterMenu: React.PropTypes.func
};

export default FilterMenuDrawer;
import React from "react";
import "../../styles/FilterMenuDrawer.css";

import Close from "material-ui/svg-icons/navigation/close";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import {List, ListItem} from 'material-ui/List';
import Subheader from "material-ui/Subheader";
import SelectField from "material-ui/SelectField";
import Star from "material-ui/svg-icons/toggle/star";
import TextField from "material-ui/TextField";

import {amber600, yellow600, grey400} from "material-ui/styles/colors";

const buttonSize = '48px';
const styles = {
    drawerStyle: {
        top: '80px',
        width: 'auto'
    },
    mediumIcon: {
        width: buttonSize,
        height: buttonSize,
    },
    medium: {
        width: buttonSize,
        height: buttonSize,
        padding: '5px',
    }
};

class FilterMenuDrawer extends React.Component {
    state = {
        value: 1,
        favoriteTags: [
            "computer",
            "mouse",
            "keyboard"
        ],
        workspaces: [
            {
                name: "first",
                id: 0
            },
            {
                name: "second",
                id: 1
            },
        ]
    };
    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Drawer containerStyle={styles.drawerStyle} open={this.props.showFilterMenu}>
                <div className="filterMenuHeader">
                    <span className="closeIcon">
                        <IconButton iconStyle={styles.mediumIcon} style={styles.medium} tooltip="Close filter menu">
                            <Close color={grey400} onClick={this.props.closeFilterMenu}/>
                        </IconButton>
                    </span>
                </div>
                <Divider/>
                <div className="drawerMenu">
                    <div className="drawerMenuGroupLabel">Workspace</div>
                    <div className="workspaceSelector">
                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange}>
                            {this.state.workspaces.map(function (workspace) {
                                return <MenuItem value={workspace.id} primaryText={workspace.name}/>
                            })}
                        </SelectField>
                    </div>
                    <Divider/>
                    <div className="drawerMenuGroupLabel">Tags</div>
                    <div className="tagField">
                        <span className="tagName">
                            <TextField
                                hintText="Type tag"
                                floatingLabelText="Tag"
                            />
                        </span>
                        <span className="tagFavorite">
                            <Star color={amber600} hoverColor={yellow600}/>
                        </span>
                    </div>
                    <div className="tagList">
                        <List>
                            <Subheader>Favorite tags</Subheader>
                            {this.state.favoriteTags.map(function (listValue) {
                                return <ListItem primaryText={listValue}/>
                            })}
                        </List>
                    </div>
                </div>
            </Drawer>
        );
    }
}

FilterMenuDrawer.propTypes = {
    showFilterMenu: React.PropTypes.bool,
    closeFilterMenu: React.PropTypes.func
};

export default FilterMenuDrawer;
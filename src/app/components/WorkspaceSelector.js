import React from "react";
import "../../styles/WorkspaceSelector.css";

import Subheader from "material-ui/Subheader";
import Done from "material-ui/svg-icons/action/done";
import {List, ListItem} from 'material-ui/List';


class WorkspaceSelector extends React.Component {

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

    handleWorkspaceChange(id) {
        this.setState({selectedWorkspace: id});
    }

    render() {
        return (
            <div className="workspaceSelectorContainer">
                <Subheader>Workspaces</Subheader>
                <List>
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
                                        insetChildren={true}
                                        leftIcon={workspace.id === this.state.selectedWorkspace ? <Done /> : null}
                                        onTouchTap={() => {this.handleWorkspaceChange(workspace.id)}}
                                    />
                                )
                            })}
                    />
                </List>
            </div>
        );
    }
}

export default WorkspaceSelector;
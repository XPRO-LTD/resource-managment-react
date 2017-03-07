import React from "react";
import "../../styles/Tags.css";

import Chip from "material-ui/Chip";
import Add from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import Subheader from "material-ui/Subheader";
import IconButton from "material-ui/IconButton";


class Tags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteTags: [
                "computer",
                "mouse",
                "keyboard"
            ],
            tagInput: ''
        };
    }

    handleRequestDelete(tag) {
        console.log("You clicked the delete button on tag: " + tag);
    }

    handleTouchTap() {
        console.log("added new tag: " + this.state.tagInput);
    }

    render() {
        return (
            <div className="tagContainer">
                <Subheader>Tags</Subheader>
                <div className="tagInput">
                    <IconButton tooltip="Add tag" onClick={() => {this.handleTouchTap()}}>
                        <Add color="white" className="addTagIcon"/>
                    </IconButton>
                    <TextField underlineShow={false} hintText="Type tag" hintStyle={{color: "white"}} inputStyle={{width: '200px', color: 'white'}}/>
                </div>
                <div className="tagList" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.favoriteTags.map((tag) => {
                        return (
                            <Chip
                                key={tag}
                                style={{margin: "5px"}}
                                className="tag"
                                onRequestDelete={() => {this.handleRequestDelete(tag)}}
                                onTouchTap={() => {this.handleTouchTap(tag)}}>{tag}
                            </Chip>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Tags;
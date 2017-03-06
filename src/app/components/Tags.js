import React from "react";
import "../../styles/Tags.css";

import Chip from "material-ui/Chip";
import Add from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import Subheader from "material-ui/Subheader";


class Tags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteTags: [
                "computer",
                "mouse",
                "keyboard"
            ]
        };
    }

    handleRequestDelete(tag) {
        alert("You clicked the delete button on tag: " + tag);
    }

    handleTouchTap(tag) {
        alert("You clicked tag: " + tag);
    }

    render() {
        return (
            <div>
                <Subheader>Tags</Subheader>
                <div className="tagInput">
                    <Add color="white" className="searchBarIcon"/>
                    <TextField underlineShow={false} hintText="Type tag" hintStyle={{color: "white"}} inputStyle={{width: '200px', color: 'white'}}/>
                </div>
                <div className="tagList">
                    {this.state.favoriteTags.map((tag) => {
                        return (
                            <Chip
                                style={{margin: "5px"}}
                                key={tag}
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
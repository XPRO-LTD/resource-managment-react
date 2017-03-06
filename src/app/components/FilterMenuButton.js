import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors'
import FilterList from 'material-ui/svg-icons/content/filter-list'

const buttonSize = '80px';

const styles = {
    iconStyle: {
        width: buttonSize,
        height: buttonSize
    },
    buttonStyle: {
        position: 'absolute',
        left: 0,
        top: 80,
        minWidth: buttonSize,
        width: buttonSize,
        height: buttonSize
    }
};

class FilterMenuButton extends React.Component {
    render(){
        return (
            <RaisedButton
                backgroundColor="#a4c639"
                style={styles.buttonStyle}>
                <FilterList color={fullWhite} style={styles.iconStyle} onClick={this.props.openFilterMenu}/>
            </RaisedButton>
        );
    }
}

FilterMenuButton.propTypes = {
    openFilterMenu: React.PropTypes.func
};

export default FilterMenuButton;
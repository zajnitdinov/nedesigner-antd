import React from 'react';
import tags from "../../data/tags";
import {Tag} from "antd";
import {connect} from "react-redux";

const {CheckableTag} = Tag;

const Search = ({selected, checked, unchecked}) => {
    const handleClick = (tag) => {
        if (selected.includes(tag)){
            unchecked(tag);
        } else {
            checked(tag);
        }
    }
    return (
        <div style={{marginBottom: 10, marginTop: 10}}>
            {tags.map(tag => (
                <CheckableTag
                    checked={selected.includes(tag)}
                    key={tag}
                    onClick={() => handleClick(tag)}>{tag}</CheckableTag>
            ))}
        </div>
    );
};

const mapStateToProps = ({selected}) => {
    return {selected}
}

const mapDispatchToProps = (dispatch) => {
    return {
        unchecked: (payload) => dispatch({
            type: 'REMOVE_FROM_SELECTED_TAGS',
            payload
        }),
        checked: (payload) => dispatch({
            type: 'ADD_TO_SELECTED_TAGS',
            payload
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
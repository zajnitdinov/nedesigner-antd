import React from 'react';
import {Card as CardAnt, Tag, Col} from 'antd';
import {connect} from "react-redux";

const Card = ({tags, title, url, desc, checked}) => {
    return (
        <Col span={8}>
            <CardAnt title={title} extra={<a href={url}>Перейти</a>}>
                <p>
                    {tags.map(tag =>
                        <Tag onClick={() => checked(tag)} key={tag}>{tag}</Tag>
                    )}
                </p>
                <p>{desc}</p>
            </CardAnt>
        </Col>
    );
};

const mapStateToProps = ({selected}) => {
    return {selected};
}

const mapDispatchToProps = dispatch => {
    return {
        checked: (payload) => dispatch({
            type: 'ADD_TO_SELECTED_TAGS',
            payload
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
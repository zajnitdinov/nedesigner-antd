import React from 'react';
import cardsInfo from "../../data/cards";
import Card from "../card";
import {Row} from "antd";
import {connect} from "react-redux";

const List = ({selected}) => {
    const data = selected.length !== 0
        ? cardsInfo.filter(card => card.tags.includes(selected[0]))
        : cardsInfo;
    return (
        <Row gutter={[10,10]}>
            {data.map(card => <Card key={card.id} {...card}/>)}
        </Row>
    );
};

const mapStateToProps = ({selected}) => {
    return {selected}
}

export default connect(mapStateToProps)(List);
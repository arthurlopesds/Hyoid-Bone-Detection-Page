import React from 'react';

import './styles.css';

export default class Card extends React.Component{
    render(){
        return(
            <div id="main-div">
                <div id="num">{this.props.num}</div>
                <div id="row_vertical"></div>
                <div id="info">{this.props.info}</div>
            </div>
        );
    }
}
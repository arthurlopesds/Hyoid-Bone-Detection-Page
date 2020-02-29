import React from 'react';
import {Card} from 'react-bootstrap'

import './styles.css';

export default class Carde extends React.Component{
    render(){
        return(
            <div id="main-div">
                <Card onClick={this.props.chama}>
                    <Card.Body>
                        <div id="num"><Card.Text>{this.props.num}</Card.Text></div>
                        <div id="row_vertical"></div>
                        <div id="info"><Card.Text>{this.props.info}</Card.Text></div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
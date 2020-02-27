import React from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap'
import './styles.css';

export default class Resposta extends React.Component{
    render(){
        return(
            <div id="main-resp">

                <div id="result">
                    <div id="result-interno">
                        sss
                    </div>
                    <div id="btn_download">
                        <ButtonToolbar>
                                <Button variant="outline-primary">Download</Button>
                        </ButtonToolbar>
                    </div>
                </div>

                <div id="desc">
                    <div id="desc-interno">
                        sss
                    </div>

                    <ButtonToolbar>
                            <Button variant="outline-primary">Nova Detecção</Button>
                    </ButtonToolbar>
        
                </div>
            </div>
        );
    }
}
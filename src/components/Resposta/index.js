import React from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap'

import './styles.css';

export default class Resposta extends React.Component{
    render(){
        return(
            <div id="main-resp">

                <div id="result">
                    <span id="title_result">Resultado</span>
                    <div id="result-interno">
                        
                    </div>
                    <div id="btn_download">
                        <ButtonToolbar>
                            <Button>Download</Button>
                        </ButtonToolbar>
                    </div>
                </div>

                <div id="desc">
                    <span id="title_desc">Descrição</span>
                    <div id="desc-interno">

                    </div>
                    
                    <div id="btn_nvdetect">
                        <ButtonToolbar>
                            <Button>Nova Detecção</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}
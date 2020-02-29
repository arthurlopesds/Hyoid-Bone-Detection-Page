import React from 'react';
import Carde from './cards';
import Slide from "@material-ui/core/Slide";
import {Button,ButtonToolbar} from 'react-bootstrap'


import './styles.css';

export default function Body() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(prev => !prev);
    };

  return (
    <div id="mainv">
        <div id="mainCard">
            <Carde num="1" info="Selecione o arquivo a ser detectado" chama={handleChange}/>
            <Carde num="2" info="Começar a Detecção"/>
            <Carde num="3" info="Veja os resultados"/>
        </div>
        <div id="mainSlide">
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                <div id="textSlide">
                    <header>
                        <div id="txt_header">
                            <h1>Detecção em imagens utilizando</h1>
                            <h4>YOLO</h4>
                        </div>
                    </header>
                    
                    <div id="upload">
                        AQUI FICA O UPLOAD
                    </div>

                    <div id="btn_obj">
                        <div id="title_bnt_obj">Objetos a detectar</div>
                        <div id="botao">
                            <div id="btn_nvdetect">
                                <ButtonToolbar>
                                    <Button>Hióide</Button>
                                </ButtonToolbar>
                            </div>
                            
                            <div id="btn_nvdetect">
                                <ButtonToolbar>
                                    <Button>Casas</Button>
                                </ButtonToolbar>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Slide>
        </div>
    </div>
  );
}

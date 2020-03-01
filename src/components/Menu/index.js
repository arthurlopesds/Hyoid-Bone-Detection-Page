import React from 'react';
import Carde from './cards';
import Slide from "@material-ui/core/Slide";
import {Button,ButtonToolbar} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../images/2.png';
import Grid from '@material-ui/core/Grid';

import './styles.css';

const useStyles = makeStyles({
    main:{
        height:863,
        backgroundImage: 'url(' + Background +')',
        backgroundSize:2000,
        backgroundColor:'#E47752',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row-reverse',
    },
    mainCard:{
        width: '70%',
        backgroundColor:'rgba(239,140,89,0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})

export default function Body() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(prev => !prev);
    };

  return (
    <Grid className={classes.main} xs={12}>
        
        <Grid item className={classes.mainCard} xs={12} md={12}>
            <Carde num="1" info="Selecione o arquivo a ser detectado" chama={handleChange}/>
            <Carde num="2" info="Começar a Detecção"/>
            <Carde num="3" info="Veja os resultados"/>
        </Grid>


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
    </Grid>
  );
}

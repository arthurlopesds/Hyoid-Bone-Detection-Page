import React from 'react';
import Carde from './cards';
import Slide from "@material-ui/core/Slide";
import {Button,ButtonToolbar} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import primary_Background from '../../images/2.png';
import second_Backgroud from '../../images/3.png';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";


import './styles.css';

const useStyles = makeStyles({
    main:{
        height:863,
        backgroundImage: 'url(' + primary_Background +')',
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
    },

    textSlide:{
        width: '100%',
        height: '100%',
        backgroundImage: 'url('+ second_Backgroud +')',
        backgroundSize: '500px',
        backgroundColor: '#FFF',
    },
    input: {
        display: "none"
      },

    div_main_up:{
        // backgroundColor:'#f23',
        height:'200px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:'2px'
    },

    div_up: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "380px",
        height: "50px",
        backgroundColor: "#F3F3F3",
        cursor: "pointer"
      },

    div_arrow: {
        borderLeft:"4px solid" /* Adiciona borda esquerda na div como ser fosse uma linha.*/,
        height: "100%",
        width: "1%",
        borderColor: "#1CA78B"
        // backgroundColor:'red'
      },

    text_up: {
        width: "100%",
        marginLeft:'6px',
        fontSize:'14px'
    
        // backgroundColor:'orange'
      },

    arrow: {
        // backgroundColor:'orange',
        width: "10%"
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
                <div className={classes.textSlide}>
                    <header>
                        <div id="txt_header">
                            <h1>Detecção em imagens utilizando</h1>
                            <h4>YOLO</h4>
                        </div>
                    </header>
                    
                    <div className={classes.div_main_up}>
                        <input
                            accept="image/* , video/wmv"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <div className={classes.div_up}>
                                <div className={classes.div_arrow} />
                                <span className={classes.text_up}>
                                    Selecione sua imagem ou seu vídeo
                                </span>
                                <ArrowUpwardIcon className={classes.arrow} />
                            </div>
                        </label>
                    </div>

                    <div id="btn_obj">
                        <div id="title_bnt_obj">Objetos a detectar</div>
                        <div id="botao">
                            <div >
                                <ButtonToolbar>
                                    <Button>Osso Hióide</Button>
                                </ButtonToolbar>
                            </div>
                            
                            <div>
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

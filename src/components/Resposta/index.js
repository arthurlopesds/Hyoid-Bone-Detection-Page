import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import useStyles from './styles'

import './styles.css';

function Resposta(props){
    const classes = useStyles(); 

    let URL = window.URL.createObjectURL(props.bblob);
    let URL_download = props.download;
    let result = props.result
    // var video = document.getElementById('player')
    // var video = document.getElementById('')
    // console.log(video)
    // console.log('.....')
    // console.log(window.URL.createObjectURL(props.bblob))
    // video.src = window.URL.createObjectURL(props.bblob)
    // var video = document.getElementById('player')
    // var video = document.getElementById('./Reposta/index.js#player')

    return(
        <Grid className={classes.mainResp}>

            <Grid item className={classes.result}>
                <span className={classes.title_result}>Resultado</span>
                
                <Grid item className={classes.resultInterno}>
                        
                    <video className={classes.video} id="player" src={URL} controls/>
                 
                </Grid>
                
                <Grid item className={classes.btn_download}>
                    <Button variant="outlined" className={classes.btn} onClick={URL_download}>Download</Button>
                </Grid>
            </Grid>

            <Grid item className={classes.desc}>
                <span className={classes.title_desc}>Descrição</span>
                
                <Grid item className={classes.descInterno}>
                        <span className={classes.descTxt}>{result}</span>
                        {/* <span className={classes.descTxt} >DESLOCAMENTO VERTICAL: 45.35 mm</span> */}
                </Grid>
                
                <Grid item className={classes.btn_nvdetect}>
                    <Button variant="outlined" className={classes.btn} onClick={props.open}>Nova Detecção</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Resposta;
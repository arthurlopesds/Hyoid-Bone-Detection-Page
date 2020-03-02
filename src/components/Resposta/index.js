import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import primary_Background from '../../images/2.png';
import './styles.css';

const useStyles = makeStyles({
    mainResp:{
        height: '100%',
        backgroundImage: 'url('+ primary_Background +')',
        backgroundSize: '2000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    result:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '60%',
        height: '900px',
        // backgroundColor: '#F3f'
    },
    desc:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '40%',
        height: '900px',
        // backgroundColor:'#fF24'
    },
    resultInterno:{
        width: '80%',
        height: '70%',
        backgroundColor: '#F16521',
        borderRadius: '10px 10px',
    },
    descInterno:{
        width: '70%',
        height: '70%',
        backgroundColor: '#F1F1F1',
        borderRadius: '10px 10px',
        '@media (max-width:600px)': {
            width:'100%'
        }
    },
    btn_download:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
        // backgroundColor: 'red'
    },
    btn_nvdetect:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '70%',
        // backgroundColor: 'royalblue',
        '@media (max-width:600px)': {
            width:'90%'
        },
    },
    title_result:{
        width: '80%',
        height: '8%',
        alignItems: 'flex-end',
        display: 'flex',
        /* background-color: #F1F1F1; */
        fontSize: '30px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#F16521',
        fontWeight: 'bold',
        marginTop: '10px',
        '@media (max-width:600px)': {
            fontSize:'24px',
            
        }
        
    },
    title_desc:{
        width: '50%',
        height: '8%',
        alignItems: 'flex-end',
        display: 'flex',
        /* background-color: #F122; */
        fontSize: '30px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#F16521',
        fontWeight: 'bold',
        marginTop: '10px',
        '@media (max-width:600px)': {
            width:'85%',
            fontSize:'23px',
            justifyContent:'flex-start'
        }
    },
    btn:{
        color:'#F16521',
        border: '1px solid #F16521',

    }

})


function Resposta(){
    const classes = useStyles();
    return(
        <Grid className={classes.mainResp} xs={12}>

            <Grid item className={classes.result} xs={12}>
                <span className={classes.title_result}>Resultado</span>
                
                <Grid item className={classes.resultInterno}>
                    
                </Grid>
                
                <Grid item className={classes.btn_download}>
                    <Button variant="outlined" className={classes.btn}>Download</Button>
                </Grid>
            </Grid>

            <Grid item className={classes.desc}>
                <span className={classes.title_desc}>Descrição</span>
                
                <Grid item className={classes.descInterno}>

                </Grid>
                
                <Grid item className={classes.btn_nvdetect}>
                    <Button variant="outlined" className={classes.btn}>Nova Detecção</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Resposta;
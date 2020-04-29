import React from 'react';
import {Card} from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'


import './styles.css';


const useStyles = makeStyles({
    num:{
        fontSize: '75px',
        fontFamily:'Arial,Helvetica',
        color: '#FFF',
        display: 'flex',
        // backgroundColor: 'blue',
        width: '40%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:600px)': {
            fontSize: '2.0rem',
          },

    },
    info:{
        fontSize: '18px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeigth: 'bold',
        color: '#FFF',
        width: '50%',
        height: '50%',
        // backgroundColor:'brown',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:600px)': {
            fontSize: '0.4rem',
            textAlign:'center'
          },
        '@media (min-width:600px)': {
            fontSize: '0.7rem',
            textAlign:'center'
          },
    },
   
})

function Carde(props){    
    const classes = useStyles();
    return(
        <Grid container id="main-div" className={classes.mdiv} xs={2} >
            <Grid container item >
                <Card onClick={props.chama}>
                    <Card.Body>
                    
                        <div id="info" className={classes.num}><Card.Text>{props.num}</Card.Text></div>
                        <div id="row_vertical"></div>
                        <div id="num" className={classes.info}><Card.Text>{props.info}</Card.Text></div>

                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
);
}

export default Carde;
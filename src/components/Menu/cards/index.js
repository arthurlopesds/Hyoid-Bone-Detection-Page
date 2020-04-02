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
            fontSize: '0.5rem',
            textAlign:'center'
          },
        '@media (min-width:600px)': {
            fontSize: '0.8rem',
            textAlign:'center'
          },
    },
})

function Carde(props){    
    const classes = useStyles();
    return(
        <Grid container id="main-div" xs={6}>
            <Grid container item xs={7} sm={6} md={5} lg={3}>
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
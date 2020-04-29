import React, { useState} from 'react';
import Carde from './cards';
import Slide from "@material-ui/core/Slide";
import {Button,ButtonToolbar} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import primary_Background from '../../images/2.png';
import second_Backgroud from '../../images/3.png';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import axios from 'axios'
// import {saveAs} from 'file-saver';
// import path from 'path'
import './styles.css';
import {Backdrop,CircularProgress,Modal,FormControl} from '@material-ui/core';
import Resposta from '../Resposta'
import Message from '../Message'


const useStyles = makeStyles( theme => ({
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
        // backgroundColor:'rgba(239,140,89,0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor:'red'
    },

    textSlide:{
        width: '100%',
        height: '900px',
        backgroundImage: 'url('+ second_Backgroud +')',
        backgroundSize: '500px',
        backgroundColor: '#FFF',
    },
    input: {
        display: "none"
      },

    div_main_up:{
        // backgroundColor:'#f23',
        height:'500px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginRight:'2px',
        
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
      },
    backdrop: {
        zIndex: theme.zIndex.drawer + -1,
        color: '#fff',
      },
    
    modal:{
        marginTop:'8%',
        marginBottom:'8%',
        marginLeft:'23%',
        marginRight:'23%',
        // backgroundImage: 'url('+ primary_Background +')',
        // backgroundColor:'white',
        // backgroundSize: '100%',
        
        
    },
    modalRoot:{
        background: 'rgba(255,255,255,0.2)',
    },
    msgDIV:{
        display:'flex',
        // backgroundColor:'black',
        width:'100%',
        // height:'10%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'10px'
    },
    uploadDIV:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'30%',
        // backgroundColor:'orange ',
        marginBottom:'200px'
    }

}))

export default function Body() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState('Escolha seu arquivo');
    const [uploadedFile,setUploadedFile] = useState({});
    const [loading,setLoading] = useState(false);
    const [open,setOpen] = useState(false);
    const [bblob,setbblob] = useState(null);
    const [url, setUrl] = useState(null);
    const [result, setResult] = useState('');
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const fechar = () => {
        setOpen(false)
    }

    const handleChange = () => {
      setChecked(prev => !prev);
    }; 

    const handleClose = () =>{
        setOpen(false)

    };
    
    const handleDownload = () =>{
        
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.mp4');
        document.body.appendChild(link);
        link.click();
        //console.log(response)

    }

    const onChange = e =>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
        // setFilename(e.target.files[0].name);
        if (e.target.files[0] === undefined){
            setFilename('Escolha seu arquivo')
            // setSeverity('info')
            // setMessage('É preciso escolher um arquivo')
        }else{
            setFilename(e.target.files[0].name);
         }
        
    }

    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);

        try{
            const res = await axios.post('http://localhost:8080/uploadFile',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });

            const{ fileName, filePath } = res.data;

            setUploadedFile({fileName,filePath});

            setMessage('Arquivo enviado com sucesso!')
            setSeverity('success')
            
        }catch(err){
            if (err.response.status === 500){
                setMessage('DEU B.O NO SERVIDOR');
                // setSeverity('error')
            }else{
                setMessage(err.response.data.msg);
                setSeverity('error')
            }
        }
    }

    // const handleBlob = async (blob) =>{
    //     await setbblob(blob)
    // };

    const handleUpload = async (e) =>{

        let formdata = new FormData()
        formdata.append('video',file)
        formdata.append('name','videoHioide')

        setLoading(true);
        console.log('Entrou')
        try{
            const response = await axios.get(`http://localhost:8080/upload/${filename}`,{
                responseType: "arraybuffer",
                headers:{
                      "Accept": "video/mp4"
                  },
                  
              
               })

            var blob = new Blob( [ response.data], {type: "video/mp4"} );
            
            setbblob(blob)

            const response2 = await axios.get(`http://localhost:8080/result`)
            setResult(response2.data)

            setLoading(false);
            setOpen(true);
            setFilename('Escolha seu arquivo')
            // writeToFile(myFileEntry,blob)
          
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setUrl(url);
            
            
        }
        catch(e){
            console.log(e)
        }
        console.log('Saiu')
    }

  return (
    <Grid className={classes.main}  >
        
        <Grid item className={classes.mainCard} xs={12}>
            <Carde num="1" info="Selecione o arquivo a ser detectado" chama={handleChange}/>
            <Carde num="2" info="Começar a Detecção" chama={handleUpload}/>
            
            {/* <Carde num="3" info="Veja os resultados" /> */}
            
            <Backdrop className={classes.backdrop} open={loading} >
                <CircularProgress color="inherit"/>
            </Backdrop>

            <Modal
                open={open}
                onClose={handleClose}
                className ={classes.modal}
            >
                
                <Resposta bblob = {bblob} open = {fechar} download = {handleDownload} result={result} />

            </Modal>
            {/* <video id="player" src="" controls/> */}
        </Grid>


        <div id="mainSlide">
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                <div className={classes.textSlide}>
                    <header>
                        <div id="txt_header">
                            {/* <h1>Detecção em imagem e vídeo utilizando</h1> */}
                            <h1>Detecção em vídeo utilizando</h1>
                            <h4>YOLO</h4>
                        </div>
                    </header>
                    
                    
                    <form onSubmit={onSubmit}>
                        <div className={classes.div_main_up}>
                            <div className={classes.msgDIV}>
                                {message ? <Message severity={severity} msg = {message} /> : null}
                            </div>
                            <div className={classes.uploadDIV}>
                                <input
                                    // accept="image/* , video/mp4"
                                    className={classes.input}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={onChange}
                                    
                                />
                                <label htmlFor="contained-button-file">
                                    <div className={classes.div_up}>
                                        <div className={classes.div_arrow} />
                                        <span className={classes.text_up}>
                                            {filename}
                                        </span>
                                        <ArrowUpwardIcon className={classes.arrow} />
                                    </div>
                                </label>
                                <FormControl >
                                    <input type="submit" value="Enviar" className="btn btn-primary btn-block mt-4"/>
                                </FormControl>    
                            </div>
                        </div>
                    </form>
                    {/* <div id="btn_obj">
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
                    </div> */}
                    
                </div>
            </Slide>
        </div>
    </Grid>
  );

}


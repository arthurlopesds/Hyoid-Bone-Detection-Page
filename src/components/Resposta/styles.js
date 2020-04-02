import { makeStyles } from '@material-ui/core/styles';
import primary_Background from '../../images/2.png';
const useStyles = makeStyles(theme =>({
    mainResp:{
        display:"flex",
        height: '100%',
        backgroundImage: 'url('+ primary_Background +')',
        backgroundColor:'white',
        backgroundSize: '100%',
        // boxShadow: '4px 8px 15px #00000066',
        borderRadius: 10,
    },
    result:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '60%',
        height: '100%',

    },
    desc:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '40%',

        height:'100%',
        
    },
    resultInterno:{
        display:'flex',
        width: '80%',
        height: '70%',
        backgroundColor: '#F16521',

    },
    descInterno:{
        width: '80%',
        height: '70%',
        backgroundColor: '#F16521',

    },
    btn_download:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
        
    },
    btn_nvdetect:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
    },
    title_result:{
        width: '80%',
        alignItems: 'flex-end',
        display: 'flex',
        fontSize: '30px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#F16521',
        fontWeight: 'bold',

        
    },
    title_desc:{
        width: '80%',
        alignItems: 'flex-end',
        display: 'flex',
        fontSize: '30px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#F16521',
        fontWeight: 'bold',
  
    },
    btn:{
        color:'#F16521',
        border: '1px solid #F16521',

    },
    video:{
        width:'100%',
        height:'100%',
        
    }

}))

export default useStyles;
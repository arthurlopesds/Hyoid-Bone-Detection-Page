import React,{useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'

const Message = ({ severity, msg}) => {

    const [open,setOpen] = useState(true);
    
    return (
        <div>
            
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                        setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    }
                >
                    {msg}
                </Alert>
            </Collapse>
  
      </div>
        
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message;
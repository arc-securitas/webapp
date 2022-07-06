import './joinModal.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

const JoinModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen} sx={props.buttonStyling} variant="contained" >Get Started</Button>
            <Modal
                disableEnforceFocus
                disableAutoFocus
                disableScrollLock
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',

                    '@media screen and (min-width: 320px)': {
                        width: '100%',
                        height: '100%',
                    },

                    '@media screen and (min-width: 481px)': {
                        width: 441,
                        height: 377,
                    },
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                    pt: 2,
                    px: 4,
                    pb: 3,
                }}>
                    <IconButton edge="start" sx={{ 
                        color: "#000",
                        '@media screen and (min-width: 320px)': {
                            marginLeft: '85%', 
                            marginTop: '5%',
                        },
    
                        '@media screen and (min-width: 481px)': {
                            marginLeft: '95%', 
                            marginTop: '0%',
                        }, 
                         }} onClick={handleClose}><CloseIcon /></IconButton>
                    
                    <h1 id='joinHeader'>Join our<br />mailing list</h1>
                    <p id='joinParagraph'>to stay up to date on all things Arc.</p>
                    <input type="text" id="joinInputEmail" name="email" placeholder="Email" /><br />
                    
                    <Button onClick={handleClose} sx={{
                        display: 'inline',
                        backgroundColor: "#3684C9",
                        border: 'none',
                        borderRadius: '4px',
                        '@media screen and (min-width: 320px)': {
                            width: '313px',
                        },
    
                        '@media screen and (min-width: 481px)': {
                            width: '365px',
                        },
                        
                        marginLeft: '30px',
                        marginTop: '10px',
                        fontFamily: "Outfit",
                        fontWeight: '700',
                        textTransform: 'none',
                        color: "#fff",
                        padding: '12px 20px',
                        textAlign: 'center',
                        gap: '4px',
                        justifyContent: 'center',
                    }} variant="contained">Join</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default JoinModal;
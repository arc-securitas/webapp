/**
 * joinModal.js
 * GetStarted Button and Popup window for joining email list
 * Uses Material UI's button and Modal components
 * All MUI components (Button, Modal, IconButton) have inline styling
 * Other components styled in joinModal.css
 */

import './joinModal.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

import { useNavigate } from "react-router";

import axios from "axios";
import validator from 'validator';

const JoinModal = (props) => {
    // Opening and closing modal window
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [incorrectEmail, setIncorrectEmail] = React.useState(false);
    const [incorrectEmailMessage, setIncorrectEmailMessage] = React.useState("");
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEmail("");
        setIncorrectEmail(false);
        setIncorrectEmailMessage("");
    };

    const handleUpdateEmail = async (e) => {
        e.preventDefault();

        const newEmail = { email };

        if (email != "" && validator.isEmail(email)) {
            setIncorrectEmail(false);
            setIncorrectEmailMessage("");
            await fetch("http://localhost:5000/emails/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEmail),
            })
                .catch(error => {
                    window.alert(error);
                    return;
                });

            handleClose();
        } else {
            setIncorrectEmail(true);
            setIncorrectEmailMessage("Please check your email.");
        }
    }

    return (
        <React.Fragment>
            {/* Get Started Button - Styling passed in from the page that is using the component */}
            <Button onClick={handleOpen} sx={props.buttonStyling} variant="contained" >Get Started</Button>

            {/* Join maling list popup window */}
            <Modal
                disableEnforceFocus
                disableAutoFocus
                disableScrollLock
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                {/* White box background of the pop up window */}
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

                    {/* Button to close pop up window */}
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

                    {/* Email input field */}
                    <input type="email" id="joinInputEmail" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />

                    {incorrectEmail ? <p style={{ "padding-left": "35px", "background": "red", "display": "inline-block", "width": "210px", "padding-top": "15px", "padding-bottom": "15px", "margin-left": "30px", "color": "white", "margin-bottom": "0px", "border-radius": "5px" }}>{incorrectEmailMessage}</p> : <br />}

                    {/* Join button */}
                    <Button onClick={handleUpdateEmail} sx={{
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
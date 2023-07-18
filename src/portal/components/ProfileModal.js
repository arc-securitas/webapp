import styles from "./ProfileModal.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

import { useAuth0 } from "@auth0/auth0-react";
import { add } from "ol/coordinate";

/*
    Popup for the Profile Page.
    ---------------------------------------------
    <ProfileModal
        firstName="Spongebob"
        middleName=""
        lastName="Squarepants"
        phoneNumber="555-5555" />
    ---------------------------------------------
    ---------------------------------------------
    <ProfileModal { UPDATED VERSION }
        fullName="Spongebob Squarepants"
        name="Spongebob Squarepants"
        emailAddress=sponge@bob.com
        phoneNumber="555-5555" />
        brokerage="SBSP Inc"
        address="1 Bikini Bottom Ave"
    ---------------------------------------------

    Each prop corresponds to an input field in the popup, where the value passed
    in is the filler value.
*/

const ProfileModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const [fullName, setFullName] = React.useState(props.fullName);
    const [emailAddress, setEmailAddress] = React.useState(props.emailAddress);
    const [phoneNumber, setPhoneNumber] = React.useState(props.phoneNumber);
    const [brokerage, setBrokerage] = React.useState(props.brokerage);
    const [streetAddress, setStreetAddress] = React.useState(props.streetAddress);
    const [cityAddress, setCityAddress] = React.useState(props.cityAddress);
    const [stateAddress, setStateAddress] = React.useState(props.stateAddress);
    const [zipAddress, setZipAddress] = React.useState(props.zipAddress);
    const { user } = useAuth0();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    async function saveChanges() {
        let response;
        let url = `/api/managers/update/${user.email}/${fullName}/${phoneNumber}/${emailAddress}/${brokerage}/${streetAddress}/${cityAddress}/${stateAddress}/${zipAddress}`;
        response = await fetch(url, {method: 'POST'});

        {/*  DELETING MIDDLE/LAST NAME
        if (middleName) {
            let url = `/api/managers/update/${user.email}/${firstName}/${middleName}/${lastName}/${phoneNumber}/${emailAddress}/${brokerage}/${address}`;
            response = await fetch(url, {method: 'POST'});
        } else {
            let url = `/api/managers/update/${user.email}/${firstName}/${lastName}/${phoneNumber}/${emailAddress}/${brokerage}/${address}`;
            response = await fetch(url, {method: 'POST'});
        }
        */}

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        handleClose();
        window.location.reload();
    }

    return (
        <React.Fragment>
            <Button onClick={handleOpen} variant="text">EDIT</Button>

            <Modal
                disableEnforceFocus
                disableAutoFocus
                disableScrollLock
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className={styles.box} sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '40px',

                    '@media screen and (min-width: 320px)': {
                        width: '100%',
                        height: '100%',
                    },

                    '@media screen and (min-width: 481px)': {
                        width: 441,
                        height: 450,
                    },
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                }}>
                    <div className={`${styles.column} ${styles.font}`}>
                        <h2 className={styles.title}>Edit Profile</h2>
                        <div className={styles.inputPair}>
                            <div>Full Name</div>
                            <input className={styles.input} type="text" name="Full Name" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Full Name" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Phone Number</div>
                            <input className={styles.input} type="text" name="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="Phone Number" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Email Address</div>
                            <input className={styles.input} type="text" name="Email Address" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} placeholder="Email Address" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Brokerage</div>
                            <input className={styles.input} type="text" name="Brokerage" onChange={(e) => setBrokerage(e.target.value)} value={brokerage} placeholder="Brokerage" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Address</div>
                            <input className={styles.input} type="text" name="Street Address" onChange={(e) => setStreetAddress(e.target.value)} value={streetAddress} placeholder="Street Address" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>City</div>
                            <input className={styles.input} type="text" name="city" onChange={(e) => setCityAddress(e.target.value)} value={cityAddress} placeholder="City Address" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>State</div>
                            <input className={styles.input} type="text" name="State" onChange={(e) => setStateAddress(e.target.value)} value={stateAddress} placeholder="State Address" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Zip Code</div>
                            <input className={styles.input} type="text" name="Zip Code" onChange={(e) => setZipAddress(e.target.value)} value={zipAddress} placeholder="Zip Code" />
                        </div>
                        <br></br>
                        <div className={styles.grow} />
                        <div className={styles.buttonPair}>
                            <Button onClick={handleClose} sx={{
                                display: 'inline',
                                backgroundColor: "#ffffff",
                                border: '1px solid #3684C9',
                                borderRadius: '4px',
                                fontFamily: "Outfit",
                                fontWeight: '700',
                                textTransform: 'none',
                                color: "#3684C9",
                                padding: '12px 20px',
                                textAlign: 'center',
                                gap: '4px',
                                justifyContent: 'center',
                                padding: '12px 24px'
                            }} variant="outlined">Cancel</Button>
                            <Button onClick={saveChanges} sx={{
                                display: 'inline',
                                backgroundColor: "#3684C9",
                                border: 'none',
                                borderRadius: '4px',
                                fontFamily: "Outfit",
                                fontWeight: '700',
                                textTransform: 'none',
                                color: "#fff",
                                padding: '12px 20px',
                                textAlign: 'center',
                                gap: '4px',
                                justifyContent: 'center',
                                padding: '12px 24px'
                            }} variant="contained">Update</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ProfileModal;
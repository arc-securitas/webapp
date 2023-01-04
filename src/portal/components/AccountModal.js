import styles from "./AccountModal.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

const AccountModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const [firstName, setFirstName] = React.useState(props.firstName);
    const [middleName, setMiddleName] = React.useState(props.middleName);
    const [lastName, setLastName] = React.useState(props.lastName);
    const [phoneNumber, setPhoneNumber] = React.useState(props.phoneNumber);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const saveChanges = () => {
        alert("saved");
        handleClose();
    }

    return (
        <React.Fragment>
            <Button onClick={handleOpen} variant="text">EDIT</Button>

            <Modal
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
                    pt: 2,
                    px: 4,
                    pb: 3,
                }}>
                    <div className={styles.column}>
                        <h2 className={styles.title}>Update Account Information</h2>
                        <div className={styles.inputPair}>
                            <div>First Name</div>
                            <input className={styles.input} type="text" name="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First Name" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Middle Name</div>
                            <input className={styles.input} type="text" name="Middle Name" onChange={(e) => setMiddleName(e.target.value)} value={middleName} placeholder="Middle Name" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Last Name</div>
                            <input className={styles.input} type="text" name="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" />
                        </div>
                        <div className={styles.inputPair}>
                            <div>Phone Number</div>
                            <input className={styles.input} type="text" name="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="Phone Number" />
                        </div>
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

export default AccountModal;
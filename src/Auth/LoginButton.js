import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button onClick={() => loginWithRedirect()} sx={{
        display: 'inline',
        backgroundColor: "#fff",
        border: 'none',
        borderRadius: '4px',
        fontFamily: "Outfit",
        fontWeight: '700',
        textTransform: 'none',
        color: "#3684C9",
        padding: '12px 20px',
        textAlign: 'center',
        gap: '4px',
        justifyContent: 'center',
        marginTop: '10px',

        '&:hover': {
            backgroundColor: '#fff'
        },

        '@media screen and (min-width: 768px)': {
            marginLeft: '3rem',
            marginTop: '-10px',
            backgroundColor: "#3684C9",
            color: "#fff",
            '&:hover': {
                backgroundColor: '#3684C9'
            }
        },

        '@media screen and (min-width: 850px)': {
            marginLeft: '10rem',
            marginTop: '-10px',
            backgroundColor: "#3684C9",
            color: "#fff",
            '&:hover': {
                backgroundColor: '#3684C9'
            }
        },

        '@media screen and (min-width: 1024px)': {
            marginLeft: '15rem',
            marginTop: '-10px',
            backgroundColor: "#3684C9",
            color: "#fff",
            '&:hover': {
                backgroundColor: '#3684C9'
            }
        },

        '@media screen and (min-width: 1440px)': {
            marginLeft: '20rem',
            marginTop: '-10px',
            backgroundColor: "#3684C9",
            color: "#fff",
            '&:hover': {
                backgroundColor: '#3684C9'
            }
        },
    }} variant="contained">Log In</Button>;
};

export default LoginButton;
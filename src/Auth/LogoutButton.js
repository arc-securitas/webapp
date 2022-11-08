import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => logout({ returnTo: window.location.origin })} sx={{
            display: 'block',
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
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',

    
            '&:hover': {
                backgroundColor: '#3684C9'
            }
        }} variant="contained">
            Log Out
        </Button>
    );
};

export default LogoutButton;
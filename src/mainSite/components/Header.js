/**
 * Header
 * Uses Material UI's App bar
 * Uses a Hamburger menu when running on mobile and tablet device
 * All styling done through inline styling
 */

import {
    Link as RouterLink,
} from "react-router-dom";

import logoPic from "../../images/ArcLogoName.svg";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import LoginButton from "../../Auth/LoginButton";
import LogoutButton from "../../Auth/LogoutButton";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

import JoinModal from "./joinModal.js";
import { useAuth0 } from "@auth0/auth0-react";

const drawerWidth = '60%';

// Page Names
const navItems = ['Home', 'Product', 'About'];

export default function Header(props) {
    // Opening and closing drawer menu
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Defining the drawer menu
    const drawer = (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', backgroundColor: '#3684C9' }}>
            <List>
                {/* Close Icon Button */}
                <IconButton edge="start" sx={{
                    color: "#fff",
                    '@media screen and (min-width: 320px)': {
                        marginLeft: '100%'
                    },

                    '@media screen and (min-width: 450px)': {
                        marginLeft: '120%'
                    },

                    '@media screen and (min-width: 520px)': {
                        marginLeft: '140%'
                    },

                    '@media screen and (min-width: 620px)': {
                        marginLeft: '160%'
                    },

                }} onClick={handleDrawerToggle}><CloseIcon /></IconButton>

                {/* Page Links Mapping */}
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <Link sx={{
                            fontFamily: "Outfit",
                            fontSize: '16px',
                            display: 'inline-block',
                            color: '#fff',
                            marginBottom: '0.5rem',

                            "&:hover": {
                                color: '#E0F0FF'
                            },

                            "&:active": {
                                fontWeight: 'bold'
                            }

                        }} onClick={handleDrawerToggle} underline='none' component={RouterLink} to={"/" + item}>
                            <Typography
                                sx={{
                                    fontFamily: "Outfit",
                            }}>{item}</Typography>
                        </Link>
                    </ListItem>
                ))}

                {isAuthenticated ? <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)} sx={{
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

                                '@media screen and (min-width: 768px)': {
                                    marginLeft: '3rem',
                                    marginTop: '-10px',
                                },

                                '@media screen and (min-width: 850px)': {
                                    marginLeft: '10rem',
                                    marginTop: '-10px',
                                },

                                '@media screen and (min-width: 1024px)': {
                                    marginLeft: '15rem',
                                    marginTop: '-10px',
                                },

                                '@media screen and (min-width: 1440px)': {
                                    marginLeft: '20rem',
                                    marginTop: '-10px',
                                },

                                '&:hover': {
                                    backgroundColor: '#fff'
                                }
                            }}>
                                My Account
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Manager Portal</MenuItem>
                                <LogoutButton onClick={popupState.close} />
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState> : <LoginButton />}
            </List>
        </Box>


    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', marginBottom: '50px' }}>
            {/* Header bar */}
            <AppBar component="nav" sx={{
                top: 0,
                width: '100%',
                backgroundColor: '#FFFFFF',

                '@media screen and (min-width: 768px)': {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}>

                <Toolbar>
                    {/* Logo */}
                    <a href="/"><img id="headerLogo" src={logoPic} alt="Arc Security Logo" style={{ marginTop: '-10px', width: '100%'}}/></a>

                    {/* Page Links */}
                    <Box sx={{
                        display: 'none',

                        '@media screen and (min-width: 768px)': {
                            display: 'block'
                        }
                    }}>
                        {navItems.map((item) => (
                            <Link sx={{
                                fontFamily: 'Lato',
                                fontSize: '16px',
                                marginRight: '1rem',
                                marginLeft: '1rem',
                                marginTop: '10px',
                                textAlign: 'center',
                                display: 'inline-block',
                                color: '#000',
                                "&:hover": {
                                    color: '#1D5DA7'
                                },

                                "&:active": {
                                    fontWeight: 'bold'
                                }

                            }} underline='none' component={RouterLink} to={"/" + item} key={item}>
                                {item}
                            </Link>
                        ))}

                        {isAuthenticated ? <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" {...bindTrigger(popupState)} sx={{
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
                                        marginTop: '10px',

                                        '@media screen and (min-width: 768px)': {
                                            marginLeft: '3rem',
                                            marginTop: '-10px',
                                        },

                                        '@media screen and (min-width: 850px)': {
                                            marginLeft: '10rem',
                                            marginTop: '-10px',
                                        },

                                        '@media screen and (min-width: 1024px)': {
                                            marginLeft: '15rem',
                                            marginTop: '-10px',
                                        },

                                        '@media screen and (min-width: 1440px)': {
                                            marginLeft: '20rem',
                                            marginTop: '-10px',
                                        },

                                        '&:hover': {
                                            backgroundColor: '#3684C9'
                                        }
                                    }}>
                                        My Account
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <Link sx={{
                                            fontFamily: 'Lato',
                                            fontSize: '16px',
                                            display: 'inline-block',
                                            color: '#000',
                                            "&:hover": {
                                                color: '#000'
                                            }
                                        }} underline='none' component={RouterLink} to="/portal/dashboard">
                                            <MenuItem onClick={popupState.close}>Manager Portal</MenuItem>
                                        </Link>
                                        <LogoutButton onClick={popupState.close} />
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState> : <LoginButton />}
                    </Box>

                    {/* Drawer Menu Icon */}
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: 'block',
                            position: 'absolute',
                            marginTop: '10px',

                            '@media screen and (min-width: 320px)': {
                                marginLeft: '80%',
                            },

                            '@media screen and (min-width: 450px)': {
                                marginLeft: '85%',
                            },

                            '@media screen and (min-width: 768px)': {
                                display: 'none'
                            },
                        }}
                    >
                        <MenuIcon sx={{ color: "#3684C9" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer Menu */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor='right'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: 'block',

                        '@media screen and (min-width: 768px)': {
                            display: 'none'
                        },

                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>

    );
}
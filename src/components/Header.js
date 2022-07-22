/** 
 * Header
 * Uses Material UI's App bar
 * Uses a Hamburger menu when running on mobile and tablet device
 * All styling done through inline styling
 */ 

import {
    Link as RouterLink,
} from "react-router-dom";

import logoPic from "../images/Logo-blue.svg";

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

import JoinModal from "./joinModal.js";

const drawerWidth = '60%';

// Page Names
const navItems = ['Home', 'Product', 'About'];

export default function Header(props) {
    // Opening and closing drawer menu
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

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

                            "&:hover": {
                                color: '#E0F0FF'
                            },

                            "&:active": {
                                fontWeight: 'bold'
                            }

                        }} onClick={handleDrawerToggle} underline='none' component={RouterLink} to={"/" + item}>
                            <ListItemText primary={item} />
                        </Link>
                    </ListItem>
                ))}

                {/* Get Started Button and pop up menu */}
                <JoinModal buttonStyling={{
                    display: 'inline',
                    backgroundColor: "#fff",
                    border: 'none',
                    borderRadius: '4px',
                    fontFamily: "Outfit",
                    fontWeight: '700',
                    textTransform: 'none',
                    color: '#3684C9',
                    padding: '12px 20px',
                    textAlign: 'center',
                    gap: '4px',
                    justifyContent: 'center',
                    fontWeight: 700,
                    marginTop: '2.5rem',

                    '&:hover': {
                        backgroundColor: '#fff'
                    }
                }} />
            </List>
        </Box>


    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Header bar */}
            <AppBar component="nav" position="sticky" sx={{
                position: 'sticky',
                top: 0,
                width: '100%',
                backgroundColor: '#E0F0FF',

                '@media screen and (min-width: 768px)': { 
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}>

                <Toolbar>
                    {/* Logo */}
                    <img id="headerLogo" src={logoPic} alt="Arc Security Logo"/>

                    {/* Arc Security  */}
                    <Typography sx={{
                        align: 'center',
                        color: '#3684C9',
                        fontFamily: 'Outfit',
                        fontWeight: 'bold',
                        fontSize: '32px',

                        '@media screen and (min-width: 320px)': { 
                            marginRight: '1rem'
                        },
                        '@media screen and (min-width: 331px)': { 
                            marginRight: '2rem'
                        },
                    }}>Arc Security</Typography>

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
                                marginTop: '15px',
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

                        {/* Get Started Button and pop up window */}
                        <JoinModal onClick={handleDrawerToggle} buttonStyling={{
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
                            marginTop: '-10px',

                            '@media screen and (min-width: 768px)': {
                                marginLeft: '3rem'
                            },

                            '@media screen and (min-width: 850px)': {
                                marginLeft: '10rem'
                            },

                            '@media screen and (min-width: 1024px)': {
                                marginLeft: '15rem'
                            },

                            '@media screen and (min-width: 1440px)': {
                                marginLeft: '20rem'
                            },

                            '&:hover': {
                                backgroundColor: '#3684C9'
                            }

                        }} />
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
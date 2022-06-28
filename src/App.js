import "./App.css";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import Footer from "./components/Footer.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";

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
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = '80%';
const navItems = ['Home', 'Product', 'About'];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', backgroundColor: '#3684C9' }}>
      <List>
        <IconButton edge="start" sx={{ color: "#fff", marginLeft: '130%' }} onClick={handleDrawerToggle}><CloseIcon /></IconButton>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link sx={{
              fontFamily: 'Outfit',
              fontSize: '16px',
              display: 'inline-block',
              color: '#fff',

              "&:hover": {
                color: '#E0F0FF'
              },

              "&:active": {
                fontWeight: 'bold'
              }

            }} onClick={handleDrawerToggle} underline='none' component={RouterLink} to={"/webapp/" + item}>
              <ListItemText primary={item} />
            </Link>
          </ListItem>
        ))}
        <Button sx={{
          display: 'inline',
          backgroundColor: "#fff",
          border: 'none',
          borderRadius: '4px',
          fontFamily: "Outfit",
          color: '#3684C9',
          padding: '12px 20px',
          textAlign: 'center',
          gap: '4px',
          justifyContent: 'center',
          fontWeight: 700,

          '&:hover': {
            backgroundColor: '#fff'
          }
        }}>Get Started</Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Router>
      {/* Header */}

      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" position="sticky" sx={{
          position: 'sticky',
          top: 0,
          width: '100%',
          backgroundColor: '#E0F0FF',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>

          <Toolbar>
            <img src="Logo-blue.png" />

            <Typography sx={{
              align: 'center',
              color: '#3684C9',
              fontFamily: 'Outfit',
              fontWeight: 'bold',
              fontSize: '32px',
              marginRight: '2rem',
            }}>Arc Security</Typography>

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
                  textAlign: 'center',
                  display: 'inline-block',
                  color: '#000',
                  "&:hover": {
                    color: '#1D5DA7'
                  },

                  "&:active": {
                    fontWeight: 'bold'
                  }

                }} underline='none' component={RouterLink} to={"/webapp/" + item} key={item}>
                  {item}
                </Link>
              ))}

              <Button sx={{
                display: 'inline',
                backgroundColor: "#3684C9",
                border: 'none',
                borderRadius: '4px',
                fontFamily: "Outfit",
                color: "#fff",
                padding: '12px 20px',
                textAlign: 'center',
                gap: '4px',
                justifyContent: 'center',

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

              }} variant="contained">Get Started</Button>
            </Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: 'block',

                '@media screen and (min-width: 768px)': {
                  display: 'none'
                }
              }}
            >
              <MenuIcon sx={{ color: "#3684C9" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        
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

              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Routes>
        <Route exact path="/webapp/home" element={<Home />} />
        <Route exact path="/webapp/" element={<Home />} />
        <Route exact path="/webapp/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>

  );
}

export default App;

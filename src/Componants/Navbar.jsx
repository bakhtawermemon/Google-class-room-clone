import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import profile from './images/profile pic.jpg';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(true); // Sidebar ko default open rakhein

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen); // Sidebar ko toggle karein
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                {/* Top Navbar */}
                <AppBar position="fixed" sx={{ backgroundColor: 'white', zIndex: 1201 }}>
                    <Toolbar>
                        <IconButton edge="start" sx={{ marginRight: 2 }} onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Avatar src={logo} alt="Classroom Logo" />
                        <Typography variant="h6" color="textSecondary" className="fw-normal mt-2">
                            Classroom
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton onClick={handleMenuOpen}>
                            <AddIcon sx={{ fontSize: '1.5rem', color: 'black' }} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleMenuClose}>Join Class</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Create Class</MenuItem>
                        </Menu>
                        <AppsIcon className='me-3' sx={{ fontSize: '1.5rem', color: 'black' }} />
                        <Avatar src={profile} sx={{ width: 32, height: 32 }} />
                    </Toolbar>
                </AppBar>

                <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            </Box>
        </>
    );
}

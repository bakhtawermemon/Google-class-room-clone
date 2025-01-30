import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import profile from './images/profile pic.jpg';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box, AppBar, Toolbar, IconButton, Avatar, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import ChevronUpIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar as MuiAvatar } from '@mui/material';


const NAVIGATION = [
    {
        segment: 'Home',
        title: 'Home',
        icon: <HomeIcon />,
    },
    {
        segment: 'orders',
        title: 'Calendar',
        icon: <CalendarTodayIcon />,
    },
    <Divider />,
    {
        segment: 'header',
        title: 'Enrolled',
        icon: <SchoolIcon />,
        children: [
            {
                segment: 'To do',
                title: 'To do',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'English 02',
                title: 'English 02',
                icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>E</MuiAvatar>,
            },
            {
                segment: 'Professional Development',
                title: 'Professional Development',
                icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>p</MuiAvatar>,
            
            },
            {
                segment: 'English Communication',
                title: 'English Communication',
                icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>E</MuiAvatar>,
            },
            {
                segment: 'Web Dev Frontend S02',
                title: 'Web Dev Frontend S02',
                icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>w</MuiAvatar>,
            },
        ],
    },
    <Divider />,
    {
        segment: 'Achieved Classes',
        title: 'Achieved Classes',
        icon: <MoveToInboxIcon />,
    },
    {
        segment: 'Settings',
        title: 'Settings',
        icon: <SettingsIcon />,
    },
];

export default function DashboardLayout() {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [enrolledOpen, setEnrolledOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const drawerWidth = 240;

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleEnrolled = () => {
        setEnrolledOpen(!enrolledOpen);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ backgroundColor: 'white', zIndex: 1201 }}>
                    <Toolbar>
                        <IconButton edge="start" onClick={toggleDrawer} sx={{ marginRight: 2 }}>
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

                <Drawer
                    variant="persistent"
                    open={drawerOpen}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        position: 'absolute',
                        top: 64,
                        height: 'calc(100% - 64px)',
                        zIndex: 1200,
                    }}
                    anchor="left"
                >
                    <Box sx={{ width: drawerWidth, marginTop: 7 }}>
                        <List>
                            {NAVIGATION.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.title && (
                                        <ListItem button onClick={item.children ? toggleEnrolled : null}>
                                            <ListItemIcon>{item.icon}</ListItemIcon>

                                            {item.title === 'Home' ? (
                                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <ListItemText primary={item.title} />
                                                </Link>
                                            ) : (
                                                <ListItemText primary={item.title} />
                                            )}

                                            {item.children && (
                                                <IconButton onClick={toggleEnrolled} sx={{ marginLeft: 'auto' }}>
                                                    {enrolledOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                                </IconButton>
                                            )}
                                        </ListItem>
                                    )}

                                    {item.children && enrolledOpen && (
                                        <List component="div" disablePadding>
                                            {item.children.map((child, childIndex) => (
                                                <ListItem
                                                    key={childIndex}
                                                    button
                                                    component={Link}
                                                    to={
                                                        child.segment === 'English 02'
                                                            ? '/english'
                                                            : child.segment === 'Professional Development'
                                                                ? '/pdclass'
                                                                : child.segment === 'English Communication'
                                                                    ? '/englishcommunication'
                                                                    : child.segment === 'Web Dev Frontend S02'
                                                                        ? '/webdevelopment'
                                                                        : '#'
                                                    }
                                                    sx={{
                                                        padding: '10px 16px',
                                                        color: 'black',
                                                    }}
                                                >
                                                    <ListItemIcon>{child.icon}</ListItemIcon>
                                                    <ListItemText primary={child.title} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    )}
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </>
    );
}


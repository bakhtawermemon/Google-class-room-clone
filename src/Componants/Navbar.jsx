import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './images/logo.png';
import profile from './images/profile pic.jpg';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from '@mui/material';
import Grid from '@mui/material/Grid';


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
    {
        kind: 'divider',
    },
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
                icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
            },
            {
                segment: 'Web Dev Frontend S02',
                title: 'Web Dev Frontend S02',
                icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
            },
            {
                segment: 'Professional Development',
                title: 'Professional Development',
                icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
            },
            {
                segment: 'English Communication',
                title: 'English Communication',
                icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
            },
            {
                segment: 'Xwave Digital Literacy (Sindhi)',
                title: 'Xwave Digital Literacy (Sindhi)',
                icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
            },
        ],
    },
    {
        kind: 'divider',
    },
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
const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function DashboardLayout() {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [enrolledOpen, setEnrolledOpen] = useState(true);
    const drawerWidth = 240;

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleEnrolled = () => {
        setEnrolledOpen(!enrolledOpen);
    };

    return (
        <div style={{ display: 'flex' }}>

            <Box style={{ zIndex: 1201 }}>
                <header className="d-flex align-items-center justify-content-between px-3 py-3 bg-white border-bottom" style={{ width: '100%', position: 'fixed', top: 0 }}>
                    <div className="d-flex align-items-center">
                        <i
                            className="bi bi-list fs-4 me-3 text-black"
                            onClick={toggleDrawer}
                            style={{ cursor: 'pointer' }}
                        >

                        </i>
                        <img src={logo} alt="Classroom Logo" style={{ height: '27px' }} className="me-2" />
                        <h4 className="text-secondary fw-normal mt-2">Classroom</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown me-3">
                            <i
                                className="bi bi-plus fs-4 text-black"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: 'pointer' }}
                            ></i>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Join Class</a></li>
                                <li><a className="dropdown-item" href="#">Create Class</a></li>
                            </ul>
                        </div>
                        <i className="bi bi-grid-3x3-gap-fill fs-4 me-3 text-black"></i>
                        <img
                            src={profile}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ height: '32px', width: '32px' }}
                        />
                    </div>
                </header>
            </Box>

            <Drawer variant="persistent" open={drawerOpen} style={{ width: drawerWidth, flexShrink: 0, marginTop: '60px' }} anchor="left">
                <div className='mt-3 pt-5' style={{ width: drawerWidth }}>
                    <List>
                        {NAVIGATION.map((item, index) => (
                            <div key={index}>
                                <ListItem button onClick={item.children ? toggleEnrolled : null} style={{ borderBottom: (item.title === 'Calendar') ? '1px solid #ccc' : 'none' }}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                                {item.children && enrolledOpen && (
                                    <List component="div" disablePadding style={{ borderBottom: '1px solid #ccc' }}>
                                        <ListItem button style={{ paddingLeft: '60px', borderBottom: 'none' }}>
                                            <ListItemIcon>{item.children[0].icon}</ListItemIcon>
                                            <ListItemText primary={item.children[0].title} />
                                        </ListItem>
                                        <ListItem button style={{ paddingLeft: '60px', }}>
                                            <ListItemIcon>{item.children[1].icon}</ListItemIcon>
                                            <ListItemText primary={item.children[1].title} />
                                        </ListItem>
                                        <ListItem button style={{ paddingLeft: '60px', }}>
                                            <ListItemIcon>{item.children[1].icon}</ListItemIcon>
                                            <ListItemText primary={item.children[1].title} />
                                        </ListItem>
                                        <ListItem button style={{ paddingLeft: '60px', }}>
                                            <ListItemIcon>{item.children[1].icon}</ListItemIcon>
                                            <ListItemText primary={item.children[1].title} />
                                        </ListItem>
                                    </List>
                                )}
                            </div>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0, marginTop: '80px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Skeleton height={100} />
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton height={100} />
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton height={100} />
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton height={100} />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}






















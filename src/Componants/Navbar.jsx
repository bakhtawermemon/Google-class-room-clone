import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './images/logo.png';
import profile from './images/profile pic.jpg';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';






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
                icon: <i
                    className="fa-solid fa-e bg-primary fs-3 fw-bold text-white py-2 px-3 rounded-circle fs-4 mx-0"

                ></i>
            },
            {
                segment: 'Professional Development',
                title: 'Professional Development',
                icon: <i
                    className="fa-solid fa-p bg-primary fs-3 fw-bold text-white py-2 px-3 rounded-circle fs-4 mx-0"

                ></i>
            },
            {
                segment: 'English Communication',
                title: 'English Communication',
                icon: <i
                    className="fa-solid fa-e bg-primary fs-3 fw-bold text-white py-2 px-3 rounded-circle fs-4 mx-0"

                ></i>
            },
            {
                segment: 'Web Dev Frontend S02',
                title: 'Web Dev Frontend S02',
                icon: <i
                    className="fa-solid fa-w bg-primary  fw-bold text-white py-2 px-2 rounded-circle fs-4 mx-0"

                ></i>

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
        <>
            <Home />
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

                <Drawer
                    variant="persistent"
                    open={drawerOpen}
                    style={{ width: drawerWidth, flexShrink: 0 }}
                    anchor="left"
                >
                    <div style={{ width: drawerWidth, marginTop: '60px' }}>



                        <List>
                            {NAVIGATION.map((item, index) => (
                                <div key={index}>
                                    {item.title && (
                                        <ListItem
                                            button
                                            onClick={item.children ? toggleEnrolled : null}
                                            style={{
                                                padding: '10px 16px', // Adjust spacing
                                                borderBottom:
                                                    (item.title === 'Home' || item.title === 'Settings' || item.title === 'Archive' || item.title === 'Achieved Classes') ||
                                                        (item.children && enrolledOpen)
                                                        ? 'none'
                                                        : '1px solid #ccc',
                                            }}
                                        >
                                            <ListItemIcon>{item.icon}</ListItemIcon>

                                            {item.title === 'Home' ? (
                                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <ListItemText primary={item.title} />
                                                </Link>
                                            ) : (
                                                <ListItemText primary={item.title} />
                                            )}
                                        </ListItem>
                                    )}

                                    {item.children && enrolledOpen && (
                                        <>
                                            <List component="div" disablePadding>
                                                {item.children.map((child, childIndex) => (
                                                    <ListItem
                                                        key={childIndex}
                                                        button
                                                        component={Link}
                                                        to={
                                                            child.segment === "English 02"
                                                                ? "/english"
                                                                : child.segment === "Professional Development"
                                                                    ? "/pdclass"
                                                                    : child.segment === "English Communication"
                                                                    ? "/englishcommunication"
                                                                    : child.segment === "Web Dev Frontend S02"
                                                                    ? "/webdevelopment"
                                                                    : "#"
                                                        }
                                                        style={{
                                                            padding: "10px 16px",
                                                            color: "black",
                                                        }}
                                                    >
                                                        <ListItemIcon>{child.icon}</ListItemIcon>
                                                        <ListItemText primary={child.title} />
                                                    </ListItem>
                                                ))}
                                            </List>


                                            <div style={{ borderBottom: '1px solid #ccc', margin: '0 ' }}></div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </List>

                    </div>
                </Drawer>

            </div>

        </>

    );
}



























































































































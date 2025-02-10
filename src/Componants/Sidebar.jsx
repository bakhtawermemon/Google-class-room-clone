import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box, IconButton, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import ChevronUpIcon from '@mui/icons-material/ExpandLess';
import { Avatar as MuiAvatar } from '@mui/material';

const NAVIGATION = [
    { segment: 'Home', title: 'Home', icon: <HomeIcon /> },
    { segment: 'orders', title: 'Calendar', icon: <CalendarTodayIcon /> },
    <Divider key="divider1" />,
    {
        segment: 'header',
        title: 'Enrolled',
        icon: <SchoolIcon />,
        children: [
            { segment: 'To do', title: 'To do', icon: <DescriptionIcon /> },
            { segment: 'English 02', title: 'English 02', icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>E</MuiAvatar> },
            { segment: 'Professional Development', title: 'Professional Development', icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>P</MuiAvatar> },
            { segment: 'English Communication', title: 'English Communication', icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>E</MuiAvatar> },
            { segment: 'Web Dev Frontend S02', title: 'Web Dev Frontend S02', icon: <MuiAvatar sx={{ bgcolor: 'primary.main', color: 'white' }}>W</MuiAvatar> },
        ],
    },
    <Divider key="divider2" />,
    { segment: 'Achieved Classes', title: 'Achieved Classes', icon: <MoveToInboxIcon /> },
    { segment: 'Settings', title: 'Settings', icon: <SettingsIcon /> },
];

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
    const [enrolledOpen, setEnrolledOpen] = useState(true);
    const drawerWidth = 240;

    const toggleEnrolled = () => setEnrolledOpen(!enrolledOpen);

    return (
        <Box sx={{ display: 'flex' }}>
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
    );
};

export default Sidebar;

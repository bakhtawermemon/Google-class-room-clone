// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Drawer = () => {
//     return (
//         <div className="d-flex">
//             {/* Sidebar */}
//             <div
//                 className="bg-white border-end"
//                 style={{ width: '250px', height: '100vh', position: 'fixed' }}
//             >
//                 <div className="d-flex align-items-center px-3 py-3 border-bottom">
//                     <i className="bi bi-list fs-4 me-3"></i>
//                     <img src='' alt="Logo" style={{ height: '30px' }} />
//                     <h5 className="ms-2 mb-0 text-secondary">Classroom</h5>
//                 </div>

//                 {/* Menu Options */}
//                 <ul className="list-unstyled p-3">
//                     <li className="mb-2">
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-house-door me-3 fs-5"></i> Home
//                         </a>
//                     </li>
//                     <li className="mb-2">
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-calendar me-3 fs-5"></i> Calendar
//                         </a>
//                     </li>
//                     <li className="mb-2">
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-collection me-3 fs-5"></i> Enrolled
//                         </a>
//                     </li>
//                     <li className="mb-2">
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-list-task me-3 fs-5"></i> To do
//                         </a>
//                     </li>

//                     {/* Classes */}
//                     <li className="mb-2">
//                         <div className="text-muted mb-2">Your Classes</div>
//                         <div className="d-flex align-items-center mb-2">
//                             <div
//                                 className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
//                                 style={{ width: '36px', height: '36px' }}
//                             >
//                                 E
//                             </div>
//                             <div className="ms-3">
//                                 <div>English 02</div>
//                                 <div className="text-muted" style={{ fontSize: '0.85rem' }}>
//                                     Cohort 02 - Kingri
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="d-flex align-items-center mb-2">
//                             <div
//                                 className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
//                                 style={{ width: '36px', height: '36px' }}
//                             >
//                                 P
//                             </div>
//                             <div className="ms-3">
//                                 <div>Professional Development</div>
//                                 <div className="text-muted" style={{ fontSize: '0.85rem' }}>
//                                     Cohort 02 - Kingri
//                                 </div>
//                             </div>
//                         </div>
//                     </li>

//                     <li className="mb-2">
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-archive me-3 fs-5"></i> Archived classes
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="text-decoration-none d-flex align-items-center">
//                             <i className="bi bi-gear me-3 fs-5"></i> Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
//                 <div className="p-4">
//                     <h1>Welcome to Google Classroom Clone</h1>
//                     <p>This is where your main content will appear.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Drawer

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer, CssBaseline, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';

const NAVIGATION = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
    {
        title: 'Reports',
        icon: <BarChartIcon />,
        children: [
            {
                title: 'Sales',
                icon: <DescriptionIcon />,
            },
            {
                title: 'Traffic',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        title: 'Integrations',
        icon: <LayersIcon />,
    },
];

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function DashboardLayoutBasic() {
    const [drawerOpen, setDrawerOpen] = useState(true); // Initially open

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    
    const drawerWidth = 240;
    
    return (
        <div style={{ display: 'flex' }}>
    
            <Drawer
                variant="persistent"
                open={drawerOpen}
                style={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                anchor="left"
            >
                <div style={{ width: drawerWidth }}>
                    <List>
                        {NAVIGATION.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Skeleton height={14} />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton height={14} />
                    </Grid>
                    <Grid item xs={4}>
                        <Skeleton height={100} />
                    </Grid>
                    <Grid item xs={8}>
                        <Skeleton height={100} />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton height={150} />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton height={14} />
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
                    <Grid item xs={3}>
                        <Skeleton height={100} />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}
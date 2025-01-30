import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Box, Grid, Card, CardHeader, Typography, Link as MuiLink, IconButton, Badge, Avatar } from '@mui/material';

const Home = () => {
    return (
        <>
            <Box sx={{ my: 3, mx: 3, marginTop: '40px' }}> {/* Adjust this marginTop to the height of your drawer */}
                <Grid container spacing={3} sx={{ paddingTop: '5rem' }}>
                    {/* Class Card 1 */}
                    <Grid item xs={12} sm={6} md={2}></Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx={{ backgroundColor: 'white', border: '1px solid', borderColor: '#dedede' }}>
                            <Card sx={{ position: 'relative' }}>
                                <CardHeader
                                    sx={{
                                        backgroundImage: `url('https://www.gstatic.com/classroom/themes/English.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        height: '113px',
                                        position: 'relative',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        <Link to='/english' className="text-white">English 02</Link>
                                    </Typography>
                                    <Typography variant="body2">
                                        Cohort 02 - Kingri <br /> xWave Team
                                    </Typography>
                                </Box>

                                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-11%',
                                            right: 20,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                backgroundColor: '#7e57c2',
                                                width: 60,
                                                height: 60,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                            }}
                                        >
                                            X
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ borderTop: 1, borderColor: '#dedede' }}>
                                        <Box display="flex" justifyContent="flex-end" mx="auto">
                                            <IconButton sx={{ marginRight: 2, marginTop: 1, color: 'dark' }}>
                                                <BadgeOutlinedIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton sx={{ marginTop: 1, backgroundColor: 'transparent', color: 'dark' }}>
                                                <FolderOutlinedIcon fontSize="large" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Card>
                    </Grid>

                    {/* Class Card 2 */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx={{ backgroundColor: 'white', border: '1px solid', borderColor: '#dedede' }}>
                            <Card sx={{ position: 'relative' }}>
                                <CardHeader
                                    sx={{
                                        backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        height: '113px',
                                        position: 'relative',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        <Link to='/pdclass' className="text-white">Professional Development</Link>
                                    </Typography>
                                    <Typography variant="body2">
                                        Cohort 02 - Kingri <br /> xWave Team
                                    </Typography>
                                </Box>

                                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-11%',
                                            right: 20,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                backgroundColor: '#7e57c2',
                                                width: 60,
                                                height: 60,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                            }}
                                        >
                                            X
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ borderTop: 1, borderColor: '#dedede', marginTop: 0, }}>
                                        <Box display="flex" justifyContent="flex-end" mx="auto">
                                            <IconButton sx={{ marginRight: 2, marginTop: 1, color: 'dark' }}>
                                                <BadgeOutlinedIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton sx={{ marginTop: 1, backgroundColor: 'transparent', color: 'dark' }}>
                                                <FolderOutlinedIcon fontSize="large" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Card>
                    </Grid>

                    {/* Class Card 3 */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx={{ backgroundColor: 'white', border: '1px solid', borderColor: '#dedede' }}>
                            <Card sx={{ position: 'relative' }}>
                                <CardHeader
                                    sx={{
                                        backgroundImage: `url('https://www.gstatic.com/classroom/themes/English.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        height: '113px',
                                        position: 'relative',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        <Link to='/englishcommunication' className="text-white">English Communication</Link>
                                    </Typography>
                                    <Typography variant="body2">
                                        Cohort 02 - Kingri <br /> xWave Team
                                    </Typography>
                                </Box>

                                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-11%',
                                            right: 20,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                backgroundColor: '#7e57c2',
                                                width: 60,
                                                height: 60,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                            }}
                                        >
                                            X
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ borderTop: 1, borderColor: '#dedede' }}>
                                        <Box display="flex" justifyContent="flex-end" mx="auto">
                                            <IconButton sx={{ marginRight: 2, marginTop: 1, color: 'dark' }}>
                                                <BadgeOutlinedIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton sx={{ marginTop: 1, backgroundColor: 'transparent', color: 'dark' }}>
                                                <FolderOutlinedIcon fontSize="large" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Card>
                    </Grid>

                    {/* Class Card 4 */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx={{ backgroundColor: 'white', border: '1px solid', borderColor: '#dedede' }}>
                            <Card sx={{ position: 'relative' }}>
                                <CardHeader
                                    sx={{
                                        backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        height: '113px',
                                        position: 'relative',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        <Link to='/webdevelopment' className="text-white">Web Dev Frontend S01</Link>
                                    </Typography>
                                    <Typography variant="body2">
                                        Cohort 02 - Kingri <br /> xWave Team
                                    </Typography>
                                </Box>

                                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-11%',
                                            right: 20,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                backgroundColor: '#7e57c2',
                                                width: 60,
                                                height: 60,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                            }}
                                        >
                                            X
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ borderTop: 1, borderColor: '#dedede' }}>
                                        <Box display="flex" justifyContent="flex-end" mx="auto">
                                            <IconButton sx={{ marginRight: 2, marginTop: 1, color: 'dark' }}>
                                                <BadgeOutlinedIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton sx={{ marginTop: 1, backgroundColor: 'transparent', color: 'dark' }}>
                                                <FolderOutlinedIcon fontSize="large" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;

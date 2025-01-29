import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <div className="container my-3 ">
                <div className="row mt-5 pt-5">
                    {/* Class Card 1 */}

                    <div className="col-12  col-sm-6 col-md-3 mb-4">
                        <div className="card bg-white border">
                            <div
                                className="card-header position-relative"
                                style={{
                                    backgroundImage: `url('https://www.gstatic.com/classroom/themes/English.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                }}
                            >
                                <h5 className="card-title">
                                    <Link to='/english' className="text-white">English 02</Link>
                                </h5>

                                <p className="card-text">Cohort 02 - Kingri <br /> xWave Team</p>
                                <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                                    <div
                                        className="text-white px-4 py-3 rounded-circle d-flex align-items-center justify-content-center fs-4"
                                        style={{ backgroundColor: '#7e57c2', marginTop: '60px' }}
                                    >
                                        X
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '130px' }}>
                                <div className="card-body border-top">
                                    <div className="d-flex justify-content-end mx-auto">
                                        <BadgeOutlinedIcon fontSize="large" className="me-3 mt-3 text-dark" />
                                        <FolderOutlinedIcon fontSize="large" className="mt-3 bg-0 text-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Class Card 2 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                        <div className="card bg-white border">
                            <div
                                className="card-header position-relative"
                                style={{
                                    backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                }}
                            >
                                <h5 className="card-title"><Link to='/pdclass' className="text-white">Professional Development</Link></h5>
                                <p className="card-text">Cohort 02 - Kingri <br /> xWave Team</p>
                                <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                                    <div
                                        className="text-white px-4 py-3 rounded-circle d-flex align-items-center justify-content-center fs-4"
                                        style={{ backgroundColor: '#7e57c2', marginTop: '60px' }}
                                    >
                                        X
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '130px' }}>
                                <div className="card-body border-top">
                                    <div className="d-flex justify-content-end mx-auto">
                                        <BadgeOutlinedIcon fontSize="large" className="me-3 mt-3 text-dark" />
                                        <FolderOutlinedIcon fontSize="large" className="mt-3 bg-0 text-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Class Card 3 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                        <div className="card bg-white border">
                            <div
                                className="card-header position-relative"
                                style={{
                                    backgroundImage: `url('https://www.gstatic.com/classroom/themes/English.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                }}
                            >
                                <h5 className="card-title"><Link to='/englishcommunication' className="text-white">English Communication</Link></h5>
                                <p className="card-text">Cohort 02 - Kingri <br /> xWave Team</p>
                                <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                                    <div
                                        className="text-white px-4 py-3 rounded-circle d-flex align-items-center justify-content-center fs-4"
                                        style={{ backgroundColor: '#7e57c2', marginTop: '60px' }}
                                    >
                                        X
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '130px' }}>
                                <div className="card-body border-top">
                                    <div className="d-flex justify-content-end mx-auto">
                                        <BadgeOutlinedIcon fontSize="large" className="me-3 mt-3 text-dark" />
                                        <FolderOutlinedIcon fontSize="large" className="mt-3 bg-0 text-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Class Card 4 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                        <div className="card bg-white border">
                            <div
                                className="card-header position-relative"
                                style={{
                                    backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                }}
                            >
                                <h5 className="card-title"><Link to='/webdevelopment' className="text-white">Web Dev Frontend S02</Link></h5>
                                <p className="card-text">Cohort 02 - Kingri <br /> xWave Team</p>
                                <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                                    <div
                                        className="text-white px-4 py-3 rounded-circle d-flex align-items-center justify-content-center fs-4"
                                        style={{ backgroundColor: '#7e57c2', marginTop: '60px' }}
                                    >
                                        X
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '130px' }}>
                                <div className="card-body border-top">
                                    <div className="d-flex justify-content-end mx-auto">
                                        <BadgeOutlinedIcon fontSize="large" className="me-3 mt-3 text-dark" />
                                        <FolderOutlinedIcon fontSize="large" className="mt-3 bg-0 text-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

import { Container, Box, Typography } from '@mui/material';


import React, { useState } from "react";
import {  Tabs, Tab, IconButton} from "@mui/material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";


const English = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
<>
<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
      <Container sx={{ mt: 5, pt: 3 }}>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
          <Tabs value={activeTab} onChange={handleChange} centered>
            <Tab label="Stream" value="Stream"  sx={{ textTransform: "none", fontWeight: "medium" }} />
            <Tab label="Classwork" value="Classwork" sx={{ textTransform: "none", fontWeight: "medium" }} />
            <Tab
              label="People"
              value="People"
           
              sx={{ textTransform: "none", fontWeight: "medium" }}
            />
          </Tabs>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <IconButton>
              <FaVideo className="text-secondary fs-5" />
            </IconButton>
            <IconButton>
              <FaCalendarAlt className="text-secondary fs-5" />
            </IconButton>
            <IconButton sx={{ bgcolor: "lightgray", borderRadius: "50%", width: 32, height: 32 }}>
              <FaGoogleDrive className="text-secondary fs-5" />
            </IconButton>
          </Box>
        </Box>

      </Container>
    </Box>
    <Container sx={{ mt: 5 }}>
      <Box sx={{ mx: 'auto' }}>  <Box className="mt-5"
        sx={{
          backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0px',
          borderRadius: '8px',
          marginLeft: '10px',
          position: 'relative',
        }}
      >
        <Typography
          variant="h3" className='ms-4 mt-5 pt-5'

        >
         English       </Typography>

        <Typography
          variant="body1" className='ms-4 mt-1 fs-5'

        >
          Cohort 02 - Kingri xWave Team
        </Typography>

      </Box>
      </Box>
    </Container>
    </>
  )
}

export default English
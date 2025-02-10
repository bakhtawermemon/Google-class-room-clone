

import React, { useState } from "react";
import { Box, Tabs, Tab, IconButton, Container, Typography } from "@mui/material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";


const PdClass = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
<>
<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
  <Container sx={{ mt: { xs: 2, md: 5 }, pt: { xs: 2, md: 3 } }}>
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        gap: { xs: 2, sm: 2 },
        flexDirection: { xs: "column", sm: "row" }, // Mobile me column, larger screens par row
      }}
    >
      {/* Tabs Section - Mobile par upar dikhane ke liye */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          overflowX: "auto",
          order: { xs: -1, sm: 0 }, // Mobile par sabse pehle dikhane ke liye
        }}
      >
        <Tab
          label="Stream"
          value="Stream"
          component={Link}
          to="/pdclass"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
        <Tab
          label="Classwork"
          value="Classwork"
          component={Link}
          to="/pdclass"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
        <Tab
          label="People"
          value="People"
          component={Link}
          to="/people2"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
      </Tabs>

      {/* Icons Section - Mobile par neeche dikhane ke liye */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2 },
          alignItems: "center",
          flexShrink: 0,
          minWidth: "fit-content",
          flexDirection: { xs: "row", sm: "row" }, // Icons ek line me rahe har screen par
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          <FaVideo className="text-secondary" />
        </IconButton>
        <IconButton sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          <FaCalendarAlt className="text-secondary" />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "lightgray",
            borderRadius: "50%",
            width: { xs: 32, sm: 36 },
            height: { xs: 32, sm: 36 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaGoogleDrive className="text-secondary" />
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
          Professional Development        </Typography>

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

export default PdClass
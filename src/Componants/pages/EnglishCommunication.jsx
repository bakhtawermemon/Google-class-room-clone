
import React, { useState } from "react";
import { Box, Typography, Container,} from "@mui/material";
import { Tabs, Tab, IconButton } from "@mui/material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";
import Announcement from "../EnglishCommunication/Announcement";

const EnglishCommunication = () => {
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
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
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
                order: { xs: -1, sm: 0 },
              }}
            >
              <Tab
                label="Stream"
                value="Stream"
                component={Link}
                to="/englishcommunication"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
              <Tab
                label="Classwork"
                value="Classwork"
                component={Link}
                to="/Classwork"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
              <Tab
                label="People"
                value="People"
                component={Link}
                to="/People"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
            </Tabs>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, sm: 2 },
                alignItems: "center",
                flexShrink: 0,
                minWidth: "fit-content",
                flexDirection: { xs: "row", sm: "row" },
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
        <Box
          sx={{
            backgroundImage: 'url(https://www.gstatic.com/classroom/themes/English.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '80px 0px',
            borderRadius: '8px',
            marginLeft: '20px',
            position: 'relative',
            marginTop: '10px',
          }}
        >
          <Typography variant="h3" sx={{ ml: 4, mt: 5, pt: 5 }}>
            English Communication
          </Typography>
          <Typography variant="body1" sx={{ ml: 4, mt: 1, fontSize: 18 }}>
            Cohort 02 - Kingri xWave Team
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px',
        }}>
       

        </Box>
      </Container>
      <Announcement />
    </>
  );
}

export default EnglishCommunication























































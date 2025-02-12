
import React, { useEffect, useState } from "react";
import { Container, Card, Typography, Avatar, Box, Tabs, Tab, IconButton } from "@mui/material";
import { Article as ArticleIcon } from "@mui/icons-material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AnnouncementList() {
  const STORAGE_KEY = "classroom_announcements";
  const [announcements, setAnnouncements] = useState([]);
  const [activeTab, setActiveTab] = useState("Classwork");

  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedAnnouncements) {
      setAnnouncements(storedAnnouncements);
    }
  }, []);

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
          to="/pdclass"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
        <Tab
          label="Classwork"
          value="Classwork"
          component={Link}
          to="/classwork2"
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
      <Typography variant="h5" sx={{ mb: 3 }}>
        View your work 
      </Typography>
      {announcements.map((announcement, index) => (
        <Card key={index} sx={{ p: 2, mb: 2, display: "flex", alignItems: "center", borderRadius: 2 }}>
          <Avatar sx={{ width: 50, height: 50, backgroundColor: "primary.main" }}>
            <ArticleIcon sx={{ color: "white" }} />
          </Avatar>
          <Box sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{announcement.title}</Typography>
            <Typography sx={{ color: "gray" }}>{announcement.date}</Typography>
            <Typography>{announcement.description}</Typography>
          </Box>
        </Card>
      ))}
    </Container>
      
    </>
    
 
  );
}

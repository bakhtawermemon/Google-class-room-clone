import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";

const Classwork = () => {
  const [activeTab, setActiveTab] = useState("Classwork");
  const [announcements, setAnnouncements] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem("announcements"));
    if (storedAnnouncements) {
      setAnnouncements(storedAnnouncements);
    }
  }, []);

  // Handle Tab Change
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Handle Menu Open
  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedAnnouncement(index);
  };

  // Handle Menu Close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedAnnouncement(null);
  };

  // Handle Edit (For Future Implementation)
  const handleEdit = () => {
    console.log("Edit announcement:", selectedAnnouncement);
    handleMenuClose();
  };

  // Handle Delete
  const handleDelete = () => {
    const updatedAnnouncements = announcements.filter((_, index) => index !== selectedAnnouncement);
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
    handleMenuClose();
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
            {/* Tabs Section */}
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
                to="/classwork"
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

            {/* Icons Section */}
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, alignItems: "center", flexShrink: 0 }}>
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

      <Box sx={{ width: "100%" }}>
        <Container sx={{ mt: 5, pt: 3 }}>
          {/* Display Announcements */}
          <Box sx={{ mt: 2 }}>
            {announcements.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No announcements available
              </Typography>
            ) : (
              announcements.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    bgcolor: "#f9f9f9",
                    borderRadius: 2,
                    boxShadow: 1,
                    mb: 2,
                    borderBottom: index !== announcements.length - 1 ? "1px solid #ddd" : "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Work Avatar and Content */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#1976D2" }}>
                      <WorkIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: item.text }} />
                      <Typography variant="body2" sx={{ color: "#757575" }}>
                        {item.date}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* More Options */}
                  <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              ))
            )}
          </Box>
        </Container>
      </Box>

      {/* Edit/Delete Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default Classwork;

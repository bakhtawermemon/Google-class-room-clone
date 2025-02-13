
import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Avatar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Article as ArticleIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AnnouncementList() {
  const STORAGE_KEY = "classroom_announcements";
  const [announcements, setAnnouncements] = useState([]);
  const [activeTab, setActiveTab] = useState("Classwork");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [assignmentDetails, setAssignmentDetails] = useState({ title: "", description: "", date: "" });
  const [isEditMode, setIsEditMode] = useState(false);
  // State to track which assignments are expanded (true/false for each index)
  const [expanded, setExpanded] = useState({});

  // Load announcements from localStorage on mount
  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setAnnouncements(storedAnnouncements);
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenMenu = (event, index) => {
    // Stop propagation so that clicking the menu icon doesn't toggle expand
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleOpenDialog = (assignment, index) => {
    setIsEditMode(true);
    setAssignmentDetails(assignment);
    setSelectedIndex(index);
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAssignmentDetails({ title: "", description: "", date: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAssignment = () => {
    const updatedAnnouncements = [...announcements];
    updatedAnnouncements[selectedIndex] = assignmentDetails;
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnnouncements));
    handleCloseDialog();
  };

  const handleDeleteAssignment = () => {
    const updatedAnnouncements = announcements.filter((_, index) => index !== selectedIndex);
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnnouncements));
    handleCloseMenu();
  };

  // Toggle the expanded state for an assignment
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* Top Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Container sx={{ mt: { xs: 2, md: 5 }, pt: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleChange}
              centered
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Stream" value="Stream" component={Link} to="/pdclass" />
              <Tab label="Classwork" value="Classwork" component={Link} to="/classwork2" />
              <Tab label="People" value="People" component={Link} to="/people2" />
            </Tabs>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton>
                <FaVideo />
              </IconButton>
              <IconButton>
                <FaCalendarAlt />
              </IconButton>
              <IconButton sx={{ bgcolor: "lightgray", borderRadius: "50%" }}>
                <FaGoogleDrive />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Announcements List */}
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          View your work
        </Typography>
        {announcements.map((assignment, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            {/* Assignment Card with only bottom border */}
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => toggleExpand(index)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ width: 50, height: 50, backgroundColor: "primary.main" }}>
                  <ArticleIcon sx={{ color: "white" }} />
                </Avatar>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {assignment.title}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>{assignment.date}</Typography>
                </Box>
              </Box>
              <IconButton onClick={(event) => handleOpenMenu(event, index)}>
                <MoreVertIcon />
              </IconButton>
            </Box>
            {/* Expandable Description with white background and shadow */}
            {expanded[index] && (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 2,
                  mt: 1,
                  whiteSpace: "pre-line", // preserves line breaks
                  boxShadow: 3, // adds a shadow effect
                }}
              >
                <Typography>{assignment.description}</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Container>

      {/* Edit/Delete Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => handleOpenDialog(announcements[selectedIndex], selectedIndex)}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteAssignment}>Delete</MenuItem>
      </Menu>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{isEditMode ? "Edit Assignment" : "Create Assignment"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={assignmentDetails.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={assignmentDetails.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="date"
            fullWidth
            variant="outlined"
            type="date"
            value={assignmentDetails.date}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveAssignment} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

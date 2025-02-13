
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Typography,
  Box,
  Avatar,
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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Article as ArticleIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";

const Classwork4 = () => {
  // Use the same key as BulletinBoard
  const LOCAL_STORAGE_KEY = "classroom_notices";

  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("Classwork");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  // Use 'dueDate' to match BulletinBoard's naming
  const [assignmentDetails, setAssignmentDetails] = useState({ title: "", description: "", dueDate: "" });
  const [expanded, setExpanded] = useState({});

  // Load saved notices from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setPosts(savedPosts);
  }, []);

  // Tabs change handler
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Menu handlers
  const handleMenuOpen = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // Dialog (edit) handlers
  const handleOpenDialog = (post, index) => {
    setIsEditMode(true);
    setAssignmentDetails(post);
    setSelectedIndex(index);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAssignmentDetails({ title: "", description: "", dueDate: "" });
  };

  // Handle changes in the dialog text fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Save (update) an assignment
  const handleSaveAssignment = () => {
    let updatedPosts = [...posts];
    if (isEditMode && selectedIndex !== null) {
      updatedPosts[selectedIndex] = assignmentDetails;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    handleCloseDialog();
  };

  // Delete an assignment
  const handleDeleteAssignment = () => {
    let updatedPosts = posts.filter((_, index) => index !== selectedIndex);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    handleMenuClose();
  };

  // Toggle expanding/collapsing description area
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };



  return (
    <>
      {/* Navigation & Icons Section */}
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
                to="/classwork"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
              <Tab
                label="People"
                value="People"
                component={Link}
                to="/people"
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
                flexDirection: "row",
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


      {/* Classwork Assignment List */}
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Classwork Announcements
        </Typography>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Box key={index} sx={{ position: "relative", cursor: "pointer", mb: 2 }}>
              {/* Header area */}
              <Box
                onClick={() => toggleExpand(index)}
                sx={{ display: "flex", alignItems: "center", gap: 1, borderBottom: "1px solid #ddd", py: 2 }}
              >
                <Avatar sx={{ width: 45, height: 45, backgroundColor: "primary.main" }}>
                  <ArticleIcon sx={{ color: "white", fontSize: "2rem" }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                    {post.title}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
                    {post.dueDate}
                  </Typography>
                </Box>
              </Box>

              {/* Expandable description */}
              {expanded[index] && (
                <Box sx={{ mt: 1, p: 2, backgroundColor: "white", borderRadius: 2, boxShadow: 1 }}>
                  <Typography sx={{ whiteSpace: "pre-line" }}>{post.description}</Typography>
                </Box>
              )}

              {/* Menu icon */}
              <IconButton onClick={(event) => handleMenuOpen(event, index)} sx={{ position: "absolute", right: 10, top: 10 }}>
                <MoreVertIcon />
              </IconButton>
            </Box>
          ))
        ) : (
          <Typography>No announcements yet.</Typography>
        )}
      </Container>

      {/* Edit/Delete Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleOpenDialog(posts[selectedIndex], selectedIndex)}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteAssignment}>Delete</MenuItem>
      </Menu>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Assignment</DialogTitle>
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
            name="dueDate"
            fullWidth
            variant="outlined"
            type="date"
            value={assignmentDetails.dueDate}
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
};

export default Classwork4;

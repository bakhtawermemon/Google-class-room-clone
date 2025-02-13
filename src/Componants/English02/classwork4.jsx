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
  Button 
} from "@mui/material";
import { Article as ArticleIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";

const Classwork4 = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("Classwork");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [assignmentDetails, setAssignmentDetails] = useState({ title: "", description: "", deadline: "" });
  // State to track which assignments are expanded to show description
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleOpenDialog = (post, index) => {
    setIsEditMode(true);
    setAssignmentDetails(post);
    setSelectedIndex(index);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAssignmentDetails({ title: "", description: "", deadline: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAssignment = () => {
    let updatedPosts = [...posts];
    if (isEditMode && selectedIndex !== null) {
      updatedPosts[selectedIndex] = assignmentDetails;
    }
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    handleCloseDialog();
  };

  const handleDeleteAssignment = () => {
    let updatedPosts = posts.filter((_, index) => index !== selectedIndex);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    handleMenuClose();
  };

  // Toggle the description view for an assignment
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Container sx={{ mt: 5, pt: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
            <Tabs value={activeTab} onChange={handleChange} centered>
              <Tab label="Stream" value="Stream" component={Link} to="/english" sx={{ textTransform: "none", fontWeight: "medium" }} />
              <Tab label="Classwork" value="Classwork" component={Link} to="/classwork4" sx={{ textTransform: "none", fontWeight: "medium" }} />
              <Tab label="People" value="People" component={Link} to="/people4" sx={{ textTransform: "none", fontWeight: "medium" }} />
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
        <Typography variant="h4" gutterBottom>Classwork Announcements</Typography>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Box 
              key={index} 
              sx={{ position: "relative", cursor: "pointer", mb: 2 }}
            >
              {/* Header area with border bottom */}
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
                    {post.deadline}
                  </Typography>
                </Box>
              </Box>

              {/* Description box - appears below the header border */}
              {expanded[index] && (
                <Box 
                  sx={{ 
                    mt: 1, 
                    p: 2, 
                    backgroundColor: "white", 
                    borderRadius: 2, 
                    boxShadow: 1 
                  }}
                >
                  <Typography sx={{ whiteSpace: "pre-line" }}>
                    {post.description}
                  </Typography>
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
            name="deadline" 
            fullWidth 
            variant="outlined" 
            type="date" 
            value={assignmentDetails.deadline} 
            onChange={handleInputChange} 
            sx={{ mb: 2 }} 
            InputLabelProps={{ shrink: true }} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleSaveAssignment} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Classwork4;

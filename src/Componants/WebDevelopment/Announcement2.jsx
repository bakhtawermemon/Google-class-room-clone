import React, { useState, useEffect } from "react";
import { 
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Container,
  Card,
  Button,                     
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CardHeader
} from "@mui/material";
import { MoreVert, Article as ArticleIcon } from "@mui/icons-material";

export default function Announcement() {
  const [assignments, setAssignments] = useState([]);
  const [assignmentDetails, setAssignmentDetails] = useState({
    title: "",
    description: "",
    date: ""
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  // For updating relative time display
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Load assignments from localStorage
  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem("assignments"));
    if (storedAssignments) setAssignments(storedAssignments);
  }, []);

  // Save assignments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  // Update currentTime every minute so relative times refresh
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Calculate relative time from a timestamp
  const getRelativeTime = (timestamp) => {
    const diff = currentTime - timestamp;
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  const handleOpenDialog = (assignment = { title: "", description: "", date: "" }, index = null) => {
    setIsEditMode(index !== null);
    setAssignmentDetails(assignment);
    setSelectedIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedIndex(null);
  };

  const handleInputChange = (e) => {
    setAssignmentDetails({ ...assignmentDetails, [e.target.name]: e.target.value });
  };

  const handleSaveAssignment = () => {
    let updatedAssignments = [...assignments];
    if (isEditMode && selectedIndex !== null) {
      // Preserve the original timestamp if it exists
      updatedAssignments[selectedIndex] = { 
        ...assignmentDetails, 
        timestamp: updatedAssignments[selectedIndex].timestamp || Date.now() 
      };
    } else {
      // For new assignments, add a timestamp
      updatedAssignments = [{ ...assignmentDetails, timestamp: Date.now() }, ...assignments];
    }
    setAssignments(updatedAssignments);
    handleCloseDialog();
  };

  const handleDeleteAssignment = () => {
    setAssignments(assignments.filter((_, index) => index !== selectedIndex));
    handleCloseMenu();
  };

  const handleMenuOpen = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setSelectedIndex(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Left side: Meet card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 0 }}>
            <Card sx={{ width: 300, borderRadius: 2, boxShadow: 1, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardHeader
                sx={{ pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                avatar={
                  <Avatar 
                    src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png" 
                    sx={{ width: 48, height: 48 }} 
                  />
                }
                title={<Typography variant="h6" sx={{ fontWeight: 500, ml: 1 }}>Meet</Typography>}
                action={<IconButton sx={{ color: '#5f6368' }}><MoreVert /></IconButton>}
              />
              <Button variant="contained" sx={{ backgroundColor: '#1a73e8', color: 'white', borderRadius: 1, p: '10px 24px', fontSize: 14, width: '100%' }}>
                Join
              </Button>
            </Card>
          </Box>
        </Grid>

        {/* Right side: Assignments */}
        <Grid item xs={12} sm={6} md={8}>
          {/* "Announce something" card */}
          <Card sx={{ p: 2, cursor: "pointer" }} onClick={() => handleOpenDialog()}>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar 
                src="https://lh3.googleusercontent.com/a/ACg8ocLIqzRHHob2faZmkTHmvFX5NeZLOibCqFYzxWukwg2mVHDYh9lh=s40-c" 
                alt="User" 
                sx={{ width: 40, height: 40 }} 
              />
              Announce something to your class
            </Typography>
          </Card>

          {/* Assignment cards */}
          {assignments.map((assignment, index) => {
            return (
              <Card 
                key={index} 
                sx={{ 
                  p: 2, 
                  mb: 2, 
                  mt: 3, 
                  display: "flex", 
                  alignItems: "center", 
                  backgroundColor: "white", 
                  border: "1px solid #ddd", 
                  borderRadius: 2 
                }}
              >
                <Avatar sx={{ width: 50, height: 50, backgroundColor: "primary.main" }}>
                  <ArticleIcon sx={{ color: "white" }} />
                </Avatar>
                <Box sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Ijaz Liaqat posted a new assignment:{" "}
                    <span style={{ fontWeight: 600, color: "black" }}>{assignment.title}</span>
                  </Typography>
                  <Typography variant="caption" sx={{ color: "gray", mt: 0.5, display: "block" }}>
                    {getRelativeTime(assignment.timestamp)}
                  </Typography>
                </Box>
                <IconButton onClick={(event) => handleMenuOpen(event, index)}>
                  <MoreVert />
                </IconButton>
              </Card>
            );
          })}
        </Grid>
      </Grid>

      {/* Edit/Delete Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => handleOpenDialog(assignments[selectedIndex], selectedIndex)}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteAssignment}>Delete</MenuItem>
      </Menu>

      {/* Edit/Create Dialog */}
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
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleSaveAssignment} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

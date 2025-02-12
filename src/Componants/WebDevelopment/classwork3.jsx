
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
  Button,
  TextField,
} from "@mui/material";
import { Article as ArticleIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";

export default function Classwork3() {
  const [assignments, setAssignments] = useState([]);
  const [activeTab, setActiveTab] = useState("Classwork");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [assignmentDetails, setAssignmentDetails] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(storedAssignments);
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenMenu = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleOpenDialog = (assignment, index) => {
    setIsEditMode(true);
    setSelectedIndex(index);
    setAssignmentDetails(assignment);
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAssignmentDetails({ title: "", description: "", date: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAssignment = () => {
    const updatedAssignments = [...assignments];
    updatedAssignments[selectedIndex] = assignmentDetails;
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    handleCloseDialog();
  };

  const handleDeleteAssignment = () => {
    const updatedAssignments = assignments.filter((_, index) => index !== selectedIndex);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    handleCloseMenu();
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
                to="/webdevelopment"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
              <Tab
                label="Classwork"
                value="Classwork"
                component={Link}
                to="/classwork3"
                sx={{ textTransform: "none", fontWeight: "medium" }}
              />
              <Tab
                label="People"
                value="People"
                component={Link}
                to="/people3"
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
        <Typography variant="h5" sx={{ mb: 2 }}>
  View your work
        </Typography>
        {assignments.length > 0 ? (
          assignments.map((assignment, index) => (
            <Card
              key={index}
              sx={{
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 2,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ width: 50, height: 50, backgroundColor: "primary.main" }}>
                  <ArticleIcon sx={{ color: "white" }} />
                </Avatar>
                <Box sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {assignment.title}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>{assignment.date}</Typography>
                </Box>
              </Box>
              <IconButton onClick={(event) => handleOpenMenu(event, index)}>
                <MoreVertIcon />
              </IconButton>
            </Card>
          ))
        ) : (
          <Typography>No assignments found.</Typography>
        )}
      </Container>

      {/* Edit/Delete Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => handleOpenDialog(assignments[selectedIndex], selectedIndex)}>
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
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleSaveAssignment} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


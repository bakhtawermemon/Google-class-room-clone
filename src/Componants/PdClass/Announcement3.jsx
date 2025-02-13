
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
  const STORAGE_KEY = "classroom_announcements";
  
  const [announcements, setAnnouncements] = useState([]);
  const [announcementDetails, setAnnouncementDetails] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedAnnouncementIndex, setSelectedAnnouncementIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // State to trigger re-render for relative time updates
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Load announcements from localStorage
  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedAnnouncements) setAnnouncements(storedAnnouncements);
  }, []);

  // Save announcements to localStorage on update
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(announcements));
  }, [announcements]);

  // Update currentTime every minute so relative times refresh automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Function to compute relative time based on a timestamp
  const getRelativeTime = (timestamp) => {
    const now = Date.now();
    const diff = now - new Date(timestamp).getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  const openDialog = (announcement = { title: "", description: "", date: "" }, index = null) => {
    setIsEditing(index !== null);
    setAnnouncementDetails(announcement);
    setSelectedAnnouncementIndex(index);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedAnnouncementIndex(null);
    setAnnouncementDetails({ title: "", description: "", date: "" });
  };

  const handleInputChange = (e) => {
    setAnnouncementDetails({ ...announcementDetails, [e.target.name]: e.target.value });
  };

  const saveAnnouncement = () => {
    if (isEditing && selectedAnnouncementIndex !== null) {
      const updatedAnnouncements = [...announcements];
      // Preserve the original createdAt when editing
      updatedAnnouncements[selectedAnnouncementIndex] = {
        ...announcementDetails,
        createdAt:
          updatedAnnouncements[selectedAnnouncementIndex].createdAt ||
          new Date().toISOString(),
      };
      setAnnouncements(updatedAnnouncements);
    } else {
      // Add a createdAt timestamp for new announcements
      setAnnouncements([{ ...announcementDetails, createdAt: new Date().toISOString() }, ...announcements]);
    }
    closeDialog();
  };

  const deleteAnnouncement = () => {
    setAnnouncements(announcements.filter((_, index) => index !== selectedAnnouncementIndex));
    closeMenu();
  };

  const openMenu = (event, index) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedAnnouncementIndex(index);
  };

  const closeMenu = () => {
    setMenuAnchorEl(null);
    setSelectedAnnouncementIndex(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Meet Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card
              sx={{
                width: 300,
                borderRadius: 2,
                boxShadow: 1,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardHeader
                sx={{
                  paddingBottom: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                avatar={
                  <Avatar
                    src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png"
                    sx={{ width: 48, height: 48 }}
                  />
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: 500, marginLeft: 1 }}>
                    Meet
                  </Typography>
                }
                action={<IconButton sx={{ color: '#5f6368' }}><MoreVert /></IconButton>}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  borderRadius: 1,
                  padding: '10px 24px',
                  fontSize: 14,
                  width: '100%',
                }}
              >
                Join
              </Button>
            </Card>
          </Box>
        </Grid>

        {/* Announcements */}
        <Grid item xs={12} sm={6} md={8}>
          <Card sx={{ p: 2, cursor: "pointer" }} onClick={() => openDialog()}>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                src="https://lh3.googleusercontent.com/a/ACg8ocLIqzRHHob2faZmkTHmvFX5NeZLOibCqFYzxWukwg2mVHDYh9lh=s40-c"
                alt="User"
                sx={{ width: 40, height: 40 }}
              />
              Announce something to your class
            </Typography>
          </Card>

          {announcements.map((announcement, index) => (
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
                borderRadius: 2,
              }}
            >
              <Avatar sx={{ width: 50, height: 50, backgroundColor: "primary.main" }}>
                <ArticleIcon sx={{ color: "white" }} />
              </Avatar>
              <Box sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}>
                <Typography variant="body2">
                  <span style={{ fontWeight: 500 }}>
                    xWave posted a new assignment:{" "}
                  </span>
                  <span style={{ fontWeight: 600 }}>
                    {announcement.title}
                  </span>
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {announcement.createdAt ? getRelativeTime(announcement.createdAt) : "just now"}
                </Typography>
              </Box>
              <IconButton onClick={(event) => openMenu(event, index)}>
                <MoreVert />
              </IconButton>
            </Card>
          ))}
        </Grid>
      </Grid>

      <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={closeMenu}>
        <MenuItem onClick={() => openDialog(announcements[selectedAnnouncementIndex], selectedAnnouncementIndex)}>
          Edit
        </MenuItem>
        <MenuItem onClick={deleteAnnouncement}>Delete</MenuItem>
      </Menu>

      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>{isEditing ? "Edit Announcement" : "Create Announcement"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={announcementDetails.title}
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
            value={announcementDetails.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="date"
            fullWidth
            variant="outlined"
            type="date"
            value={announcementDetails.date}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={saveAnnouncement} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

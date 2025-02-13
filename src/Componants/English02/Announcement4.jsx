

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
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    deadline: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // State to trigger re-renders for relative time updates
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update currentTime every minute so that relative time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("userPosts"));
    if (savedPosts) setPosts(savedPosts);
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userPosts", JSON.stringify(posts));
  }, [posts]);

  // Helper to calculate relative time
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

  const openDialog = (post = { title: "", description: "", deadline: "" }, index = null) => {
    setIsEditing(index !== null);
    setPostDetails(post);
    setCurrentPostIndex(index);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentPostIndex(null);
  };

  const handleChange = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const savePost = () => {
    if (isEditing && currentPostIndex !== null) {
      const updatedPosts = [...posts];
      // Preserve original timestamp if available
      updatedPosts[currentPostIndex] = {
        ...postDetails,
        timestamp: posts[currentPostIndex].timestamp || Date.now(),
      };
      setPosts(updatedPosts);
    } else {
      // For new posts, add a timestamp
      setPosts([{ ...postDetails, timestamp: Date.now() }, ...posts]);
    }
    closeDialog();
  };

  const deletePost = () => {
    setPosts(posts.filter((_, index) => index !== currentPostIndex));
    closeMenu();
  };

  const openMenu = (event, index) => {
    setMenuAnchorEl(event.currentTarget);
    setCurrentPostIndex(index);
  };

  const closeMenu = () => {
    setMenuAnchorEl(null);
    setCurrentPostIndex(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Left Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              width: 300,
              borderRadius: 2,
              boxShadow: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png"
                  sx={{ width: 48, height: 48 }}
                />
              }
              title={<Typography variant="h6">Meet</Typography>}
              action={<IconButton><MoreVert /></IconButton>}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1a73e8",
                color: "white",
                width: "100%",
              }}
            >
              Join
            </Button>
          </Card>
        </Grid>
        {/* Right Section: Create & List Announcements */}
        <Grid item xs={12} sm={6} md={8}>
          <Card sx={{ p: 2, cursor: "pointer" }} onClick={() => openDialog()}>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                src="https://lh3.googleusercontent.com/a/ACg8ocLIqzRHHob2faZmkTHmvFX5NeZLOibCqFYzxWukwg2mVHDYh9lh=s40-c"
                sx={{ width: 40, height: 40 }}
              />
              Announce something to your class
            </Typography>
          </Card>
          {posts.map((post, index) => (
            <Card
              key={index}
              sx={{
                p: 2,
                mt: 3,
                display: "flex",
                alignItems: "flex-start",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "primary.main",
                  mt: 1,
                }}
              >
                <ArticleIcon sx={{ color: "white" }} />
              </Avatar>
              <Box sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
                  A Shazia Gul posted a new assignment:{" "}
                  <span style={{ fontWeight: "bold" }}>{post.title}</span>
                </Typography>
                <Typography variant="caption" sx={{ color: "gray", mt: 0.5, display: "block" }}>
                  {getRelativeTime(post.timestamp)}
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
        <MenuItem onClick={() => openDialog(posts[currentPostIndex], currentPostIndex)}>
          Edit
        </MenuItem>
        <MenuItem onClick={deletePost}>Delete</MenuItem>
      </Menu>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>{isEditing ? "Edit Announcement" : "Create Announcement"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={postDetails.title}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={postDetails.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Deadline"
            name="deadline"
            fullWidth
            variant="outlined"
            type="date"
            value={postDetails.deadline}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={savePost} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

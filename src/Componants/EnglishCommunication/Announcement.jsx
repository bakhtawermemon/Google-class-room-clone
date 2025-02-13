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
  CardHeader,
} from "@mui/material";
import { MoreVert, Article as ArticleIcon } from "@mui/icons-material";

export default function BulletinBoard() {
  const LOCAL_STORAGE_KEY = "classroom_notices";

  const [notices, setNotices] = useState([]);
  const [noticeData, setNoticeData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [contextMenuAnchor, setContextMenuAnchor] = useState(null);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedNotices) setNotices(storedNotices);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notices));
  }, [notices]);

  const computeTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);
    if (diffInSeconds < 60) return "just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60)
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24)
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  };

  const showModal = (notice = { title: "", description: "", dueDate: "" }, index = null) => {
    setEditMode(index !== null);
    setNoticeData(notice);
    setCurrentNoticeIndex(index);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setCurrentNoticeIndex(null);
    setNoticeData({ title: "", description: "", dueDate: "" });
  };

  const updateNoticeData = (e) => {
    setNoticeData({ ...noticeData, [e.target.name]: e.target.value });
  };

  const storeNotice = () => {
    if (editMode && currentNoticeIndex !== null) {
      const updatedNotices = [...notices];
      updatedNotices[currentNoticeIndex] = {
        ...noticeData,
        createdAt:
          updatedNotices[currentNoticeIndex].createdAt || new Date().toISOString(),
      };
      setNotices(updatedNotices);
    } else {
      setNotices([
        { ...noticeData, createdAt: new Date().toISOString() },
        ...notices,
      ]);
    }
    hideModal();
  };

  const removeNotice = () => {
    setNotices(notices.filter((_, idx) => idx !== currentNoticeIndex));
    hideContextMenu();
  };

  const showContextMenu = (event, index) => {
    setContextMenuAnchor(event.currentTarget);
    setCurrentNoticeIndex(index);
  };

  const hideContextMenu = () => {
    setContextMenuAnchor(null);
    setCurrentNoticeIndex(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                sx={{
                  pb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                avatar={
                  <Avatar
                    src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png"
                    sx={{ width: 48, height: 48 }}
                  />
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: 500, ml: 1 }}>
                    Meet
                  </Typography>
                }
                action={<IconButton sx={{ color: "#5f6368" }}><MoreVert /></IconButton>}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1a73e8",
                  color: "white",
                  borderRadius: 1,
                  p: "10px 24px",
                  fontSize: 14,
                  width: "100%",
                }}
              >
                Join
              </Button>
            </Card>
          </Box>
        </Grid>

        {/* Notices Section */}
        <Grid item xs={12} sm={6} md={8}>
          {/* "Post a notice" Card */}
          <Card sx={{ p: 2, cursor: "pointer" }} onClick={() => showModal()}>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                src="https://lh3.googleusercontent.com/a/ACg8ocLIqzRHHob2faZmkTHmvFX5NeZLOibCqFYzxWukwg2mVHDYh9lh=s40-c"
                alt="User"
                sx={{ width: 40, height: 40 }}
              />
              Post a notice for your class
            </Typography>
          </Card>

          {/* Notice Cards */}
          {notices.map((notice, index) => (
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
                <Typography variant="body2" sx={{ color: "black" }}>
                  <span style={{ fontWeight: 500, color: "black" }}>
                    Shazia posted a new assignment:{" "}
                  </span>
                  <span style={{ fontWeight: 600, color: "black" }}>
                    {notice.title}
                  </span>
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {notice.createdAt ? computeTimeAgo(notice.createdAt) : "just now"}
                </Typography>
              </Box>
              <IconButton onClick={(event) => showContextMenu(event, index)}>
                <MoreVert />
              </IconButton>
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* Edit/Delete Context Menu */}
      <Menu
        anchorEl={contextMenuAnchor}
        open={Boolean(contextMenuAnchor)}
        onClose={hideContextMenu}
      >
        <MenuItem onClick={() => showModal(notices[currentNoticeIndex], currentNoticeIndex)}>
          Edit
        </MenuItem>
        <MenuItem onClick={removeNotice}>Delete</MenuItem>
      </Menu>

      {/* Notice Modal */}
      <Dialog open={modalVisible} onClose={hideModal}>
        <DialogTitle>{editMode ? "Edit Notice" : "Create Notice"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={noticeData.title}
            onChange={updateNoticeData}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={noticeData.description}
            onChange={updateNoticeData}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="dueDate"
            fullWidth
            variant="outlined"
            type="date"
            value={noticeData.dueDate}
            onChange={updateNoticeData}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={storeNotice} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

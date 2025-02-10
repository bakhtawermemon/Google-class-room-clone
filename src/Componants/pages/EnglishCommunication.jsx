
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Avatar, Menu, MenuItem, Container, Card, CardHeader, Button, Grid } from "@mui/material";
import { Tabs, Tab, IconButton } from "@mui/material";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";
import BoldIcon from "@mui/icons-material/FormatBold";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import StrikethroughIcon from "@mui/icons-material/StrikethroughS";
import WarningIcon from "@mui/icons-material/Warning";
import YouTubeIcon from "@mui/icons-material/YouTube";
import UploadIcon from "@mui/icons-material/CloudUpload";
import LinkIcon from "@mui/icons-material/Link";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function AnnouncementBox() {
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Stream");
  const inputRef = useRef(null);

  useEffect(() => {
    const editableDiv = document.getElementById("announcementBox");
    if (editableDiv) {
      editableDiv.setAttribute("dir", "ltr");
      editableDiv.style.direction = "ltr";
    }
  }, [announcement]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem("announcements"));
    if (storedAnnouncements) {
      setAnnouncements(storedAnnouncements);
    }
  }, []);

  useEffect(() => {
    if (announcements.length > 0) {
      localStorage.setItem("announcements", JSON.stringify(announcements));
    }
  }, [announcements]);

  const handlePost = () => {
    if (announcement.trim() !== "") {
      const currentDate = new Date().toLocaleString();
      const newAnnouncement = { text: announcement, date: currentDate };
      setAnnouncements((prevAnnouncements) => [newAnnouncement, ...prevAnnouncements]);
      setAnnouncement("");
      setOpen(false);
    }
  };

  const handleDelete = (index) => {
    const updatedAnnouncements = announcements.filter((_, i) => i !== index);
    setAnnouncements(updatedAnnouncements);
    handleMenuClose();
  };

  const handleEdit = (index) => {
    setAnnouncement(announcements[index].text);
    handleDelete(index);
    setOpen(true);
    handleMenuClose();
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPostIndex(null);
  };

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };

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
        <Box
          sx={{
            backgroundImage: 'url(https://www.gstatic.com/classroom/themes/English.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '80px 0px',
            borderRadius: '8px',
            marginLeft: '20px',
            position: 'relative',
            marginTop: '10px',
          }}
        >
          <Typography variant="h3" sx={{ ml: 4, mt: 5, pt: 5 }}>
            English Communication
          </Typography>
          <Typography variant="body1" sx={{ ml: 4, mt: 1, fontSize: 18 }}>
            Cohort 02 - Kingri xWave Team
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px',
        }}>
          <Grid container spacing={2} sx={{ marginTop: 0 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                minHeight: 'auto',
              }}>
                <Card sx={{
                  width: 300,
                  borderRadius: 2,
                  boxShadow: 1,
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <CardHeader
                    sx={{
                      paddingBottom: 2,
                      paddingLeft: 0,
                      paddingRight: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    avatar={<img alt="Google Meet logo" src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png" />}
                    title={<Typography variant="h6" sx={{ fontWeight: 500, marginLeft: 1 }}>Meet</Typography>}
                    action={
                      <IconButton className="ms-5 mt-2" sx={{ color: '#5f6368' }}>
                        <MoreVertIcon />
                      </IconButton>
                    }
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
                      '&:hover': {
                        backgroundColor: '#185abc',
                      },
                    }}
                  >
                    Join
                  </Button>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={8}>
              <Box sx={{ margin: "auto", marginTop: 0, position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 1,
                  }}
                  onClick={() => setOpen(true)}
                >
                  <Avatar
                    alt="Profile picture"
                    src="https://lh3.googleusercontent.com/ogw/AF2bZygumxt-R1-aQCaCiBksy_7NpBJaDCoogRjczGAUYpJr-Z0=s32-c-mo"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Typography variant="body1" color="textSecondary">
                    Announce something to your class
                  </Typography>
                </Box>

                {open && (
                  <Box sx={{ marginTop: "20px", backgroundColor: "white", borderRadius: 2, boxShadow: 3, p: 2 }}>
                    <Box
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => setAnnouncement(e.target.innerHTML)}
                      dangerouslySetInnerHTML={{ __html: announcement }}
                      dir="ltr" // Ensures left-to-right typing
                      sx={{
                        minHeight: "100px",
                        border: "1px solid #ccc",
                        padding: "8px",
                        borderBottom: "2px solid #4285f4",
                        textAlign: "left",
                        direction: "ltr", // Forces correct text direction
                        unicodeBidi: "isolate", // Completely resets any inherited RTL styles
                        whiteSpace: "pre-wrap",
                      }}
                      onFocus={(e) => {
                        e.target.setAttribute("dir", "ltr");
                        e.target.style.direction = "ltr"; // Force LTR on focus
                      }}
                      onKeyDown={(e) => {
                        e.target.setAttribute("dir", "ltr");
                        e.target.style.direction = "ltr"; // Ensures typing stays LTR
                      }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 1 }}>
                      <Box sx={{ display: "flex" }}>
                        <IconButton onClick={() => handleFormat("bold")}><BoldIcon /></IconButton>
                        <IconButton onClick={() => handleFormat("italic")}><ItalicIcon /></IconButton>
                        <IconButton onClick={() => handleFormat("underline")}><UnderlineIcon /></IconButton>
                        <IconButton onClick={() => handleFormat("insertUnorderedList")}><ListIcon /></IconButton>
                        <IconButton onClick={() => handleFormat("strikeThrough")}><StrikethroughIcon /></IconButton>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton><WarningIcon /></IconButton>
                        <IconButton><YouTubeIcon /></IconButton>
                        <IconButton><UploadIcon /></IconButton>
                        <IconButton><LinkIcon /></IconButton>
                        <Typography variant="body2" sx={{ cursor: "pointer", color: "#757575", ml: 2 }} onClick={() => setOpen(false)}>
                          Cancel
                        </Typography>
                        <Typography variant="body2" sx={{ cursor: "pointer", color: "#4285f4", ml: 2 }} onClick={handlePost}>
                          Post
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                 
                )}

                <Box sx={{ marginTop: 3 }}>
                  {announcements.map((item, index) => (
                    <Box key={index} sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 1, marginBottom: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar alt="Work Avatar" src="https://www.shutterstock.com/image-vector/clipboard-icon-vector-task-line-600nw-1924885916.jpg" sx={{ width: 30, height: 30, mr: 2 }} />
                        <Typography variant="body1" sx={{ flexGrow: 1 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                        <Typography variant="body2" sx={{ color: "#757575", marginLeft: 2 }}>
                          {item.date}
                        </Typography>
                        <IconButton onClick={(e) => handleMenuClick(e, index)}>
                          <MoreVertIcon />
                        </IconButton>
                      </Box>

                      <Menu anchorEl={anchorEl} open={anchorEl && selectedPostIndex === index} onClose={handleMenuClose}>
                        <MenuItem onClick={() => handleEdit(selectedPostIndex)}>Edit</MenuItem>
                        <MenuItem onClick={() => handleDelete(selectedPostIndex)}>Delete</MenuItem>
                      </Menu>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </>
  );
}





















































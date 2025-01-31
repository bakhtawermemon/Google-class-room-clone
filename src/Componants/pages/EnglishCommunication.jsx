import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Avatar, Menu, MenuItem, Container, Card, CardHeader, Button, Grid } from "@mui/material";
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
      setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newAnnouncement]);
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

  return (
    <Container sx={{ mt: 5, pt: 5 }}>
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
          marginTop: '20px',
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
                  src="https://lh3.googleusercontent.com/a/ACg8ocKwRQPfe67fGpnmL7D7-GrBrpH8Ag1nxTXKqJvYvLNk=s96-c"
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="body1" color="textSecondary">
                  Announce something to your class
                </Typography>
              </Box>

              {open && (
                <Box sx={{
                  marginTop: "20px",
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  width: "100%",
                  maxWidth: 900,
                  padding: 2,
                  zIndex: 999,
                }}>
                  <Box
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => setAnnouncement(e.target.innerHTML)}
                    dangerouslySetInnerHTML={{ __html: announcement }}
                    placeholder="Announce something to your class"
                    variant="outlined"
                    sx={{
                      minHeight: "100px",
                      border: "1px solid #ccc",
                      padding: "8px",
                      borderBottom: "2px solid #4285f4",
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
                      <Typography variant="body2" sx={{ cursor: "pointer", color: "#757575", marginLeft: 2 }} onClick={() => setOpen(false)}>
                        Cancel
                      </Typography>
                      <Typography variant="body2" sx={{ cursor: "pointer", color: "#4285f4", marginLeft: 2 }} onClick={handlePost}>
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

                    <Menu
                      anchorEl={anchorEl}
                      open={anchorEl && selectedPostIndex === index}
                      onClose={handleMenuClose}
                    >
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
  );
}









































































































// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   Avatar,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Button,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import BoldIcon from "@mui/icons-material/FormatBold";
// import ItalicIcon from "@mui/icons-material/FormatItalic";
// import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
// import ListIcon from "@mui/icons-material/FormatListBulleted";
// import StrikethroughIcon from "@mui/icons-material/StrikethroughS";
// import WarningIcon from "@mui/icons-material/Warning";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import UploadIcon from "@mui/icons-material/CloudUpload";
// import LinkIcon from "@mui/icons-material/Link";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// export default function AnnouncementBox() {
//   const [open, setOpen] = useState(false);
//   const [announcement, setAnnouncement] = useState("");
//   const [announcements, setAnnouncements] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedPostIndex, setSelectedPostIndex] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false); // For the URL input dialog
//   const [url, setUrl] = useState(""); // URL state for input

//   const handlePost = () => {
//     if (announcement.trim() !== "") {
//       setAnnouncements([...announcements, announcement]);
//       setAnnouncement("");
//       setOpen(false);
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedAnnouncements = announcements.filter((_, i) => i !== index);
//     setAnnouncements(updatedAnnouncements);
//     handleMenuClose();
//   };

//   const handleEdit = (index) => {
//     setAnnouncement(announcements[index]);
//     handleDelete(index);
//     setOpen(true);
//     handleMenuClose();
//   };

//   const handleMenuClick = (event, index) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedPostIndex(index);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedPostIndex(null);
//   };

//   const handleFormat = (command) => {
//     document.execCommand(command, false, null);
//   };

//   // Function to insert the link into the contentEditable div
//   const handleAddLink = () => {
//     const selection = window.getSelection();
//     const range = selection.getRangeAt(0);
//     const linkNode = document.createElement("a");
//     linkNode.href = url;
//     linkNode.target = "_blank";
//     linkNode.innerText = url;
//     range.deleteContents();
//     range.insertNode(linkNode);
//     setDialogOpen(false);
//     setUrl(""); // Clear the URL input field
//   };

//   return (
//     <Box sx={{ width: "900px", margin: "auto", marginTop: 5, position: "relative" }}>
//       {/* Clickable Box */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           p: 2,
//           bgcolor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//           cursor: "pointer",
//           position: "relative",
//           zIndex: 1,
//         }}
//         onClick={() => setOpen(true)}
//       >
//         <Avatar
//           alt="Profile picture"
//           src="https://lh3.googleusercontent.com/a/ACg8ocKwRQPfe67fGpnmL7D7-GrBrpH8Ag1nxTXKqJvYvLNk=s96-c"
//           sx={{ width: 40, height: 40, mr: 2 }}
//         />
//         <Typography variant="body1" color="textSecondary">
//           Announce something to your class
//         </Typography>
//       </Box>

//       {/* Expanded Box */}
//       {open && (
//         <Box
//           sx={{
//             marginTop: "20px",
//             position: "relative",
//             backgroundColor: "white",
//             borderRadius: 2,
//             boxShadow: 3,
//             width: "900px",
//             padding: 2,
//             zIndex: 999,
//           }}
//         >
//           <Box
//             contentEditable
//             suppressContentEditableWarning
//             onInput={(e) => setAnnouncement(e.target.innerHTML)}
//             dangerouslySetInnerHTML={{ __html: announcement }}
//             placeholder="Announce something to your class"
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 borderBottom: "2px solid #4285f4",
//               },
//               minHeight: "100px",
//               border: "1px solid #ccc",
//               padding: "8px",
//             }}
//           />
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 1 }}>
//             <Box sx={{ display: "flex" }}>
//               <IconButton onClick={() => handleFormat("bold")}><BoldIcon /></IconButton>
//               <IconButton onClick={() => handleFormat("italic")}><ItalicIcon /></IconButton>
//               <IconButton onClick={() => handleFormat("underline")}><UnderlineIcon /></IconButton>
//               <IconButton onClick={() => handleFormat("insertUnorderedList")}><ListIcon /></IconButton>
//               <IconButton onClick={() => handleFormat("strikeThrough")}><StrikethroughIcon /></IconButton>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <IconButton><WarningIcon /></IconButton>
//               <IconButton><YouTubeIcon /></IconButton>
//               <IconButton><UploadIcon /></IconButton>
//               <IconButton onClick={() => setDialogOpen(true)}><LinkIcon /></IconButton> {/* Open dialog on Link icon click */}
//               <Typography
//                 variant="body2"
//                 sx={{ cursor: "pointer", color: "#757575", marginLeft: 2 }}
//                 onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{ cursor: "pointer", color: "#4285f4", marginLeft: 2 }}
//                 onClick={handlePost}
//               >
//                 Post
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       )}

//       {/* Dialog to add Link */}
//       <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
//         <DialogTitle>Enter URL</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="URL"
//             fullWidth
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             variant="outlined"
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setDialogOpen(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleAddLink} color="primary">
//             Add Link
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Announcements Display */}
//       <Box sx={{ marginTop: 3 }}>
//         {announcements.map((item, index) => (
//           <Box key={index} sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 1, marginBottom: 2 }}>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Avatar
//                 alt="Work Avatar"
//                 src="https://lh3.googleusercontent.com/a/ACg8ocKwRQPfe67fGpnmL7D7-GrBrpH8Ag1nxTXKqJvYvLNk=s96-c"
//                 sx={{ width: 30, height: 30, mr: 2 }}
//               />
//               <Typography variant="body1" sx={{ flexGrow: 1 }} dangerouslySetInnerHTML={{ __html: item }} />
//               <IconButton onClick={(e) => handleMenuClick(e, index)}>
//                 <MoreVertIcon />
//               </IconButton>
//             </Box>

//             {/* Dropdown Menu */}
//             <Menu
//               anchorEl={anchorEl}
//               open={anchorEl && selectedPostIndex === index}
//               onClose={handleMenuClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             >
//               <MenuItem onClick={() => handleEdit(selectedPostIndex)}>Edit</MenuItem>
//               <MenuItem onClick={() => handleDelete(selectedPostIndex)}>Delete</MenuItem>
//             </Menu>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

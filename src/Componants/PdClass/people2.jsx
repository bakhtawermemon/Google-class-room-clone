import React, { useState } from "react";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Box,
  Tabs,
  Tab,
  IconButton,
  Container,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";

const peopleData = {
  teachers: [
    {
        name: "xWave Team",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocIfkztwFvEBDqBrLUP3bB_v2_OrZZgLBMjNxD5v2Ndw-oxFzw=s32-c-mo",
      },
      {
        name: "Abeera Khan",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocIjQjMfnYc6AyGgGoz-qiunXus8sK7Qcj7gjr7d65ZcFO5-eQ=s32-c-mo", 
      },
      {
        name: "Mudassir Rehman",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUpXOKw5S2dwadReJ33WFxN3R5GamVbAAARZXk0um9XxB3f0koI=s32-c",
      },
      {
        name: "Muhammad Rashid",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW6-SKRlgGL0P6BhJ1K_795VsbOoMwukoe1jkpHfDf-OaioUizw=s32-c",
      },
      {
        name: "Shafique ur Rehman",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWnkpRYt0dMHO1V7xC-BfD0cqDxYYd5yePSek7dDyQd1Dtycb4=s32-c", 
      },
      {
        name: "Wardah Noor",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocKAI4ozLUkYP-r8nFDeUlense0hq4TLNWjYvDehPqZwjgXEHQ=s32-c-mo", 
      },
  ],
  classmates: [
    { name: "Aamir", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVhTnCAf3d0JMWy61y0IJHj2PEgOcvjRsYe6xOutq1YDQu88TnA=s32-c" },
    { name: "Awais ur rahman", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUwZga3ZwFgy-b8ZDkao_zWaXT2cNsQQW4zSNWMjO0W_vNnpN2S=s32-c" },
    { name: "Faraz Ali Kanhar", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVvxEvQByyUF4PmsyvvI3BNf8W79M63lvvhfpb94rLB6y0bw_kc=s32-c" },
    { name: "Khuda Bux", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVm-6ODpCz8btn66TN8_c4D_coSAtjHTJ3qaSDGaR8khhSPl-wH=s32-c" },
    { name: "Sanaullah", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVmwFKbL16HNT2VmEzvqOohBk79NufJQjSiojWuMD9ttbc5B9b9=s32-c" },
    { name: "Sidra channa", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUYke7IRnQIy2m977igK2x4zDjwh2hqoCvmHXsOeeRILbAAJKSx=s32-c" },
    { name: "Suhail Ahmed", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVf7s0bIsP6DVORCnKF41xlizm3Qbe-3jtETQ78zAovEAnbbwR7=s32-c" },
    { name: "Aqsa Ali Bhayo - xWave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUnF2BT0Tc84KbgOyFAnCOvKxchQiT-yVDtKMJIrPSpkiNOTbVk=s32-c" },
    { name: "Arif Ali Mirani . Xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVUl9cW6PRUqbEhWPgz1L2LR3ZnbFGewku6nuYt4PptC-fYeviH=s32-c" },
    { name: "Farhana Abbasi xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUYke7IRnQIy2m977igK2x4zDjwh2hqoCvmHXsOeeRILbAAJKSx=s32-c" },
    { name: "Abdul Rafay Abbasi-xWave", avatar: "https://lh3.googleusercontent.com/a/ACg8ocI1Ckh5-D_UXpY2LxIa-gLkBYrwszA0sxqVhwds23_HiwIqew=s32-c-mo" },
    { name: "Muneem Ahmed", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXPgxsebNZK2sbr8SaVU3epIkDvGnI22rJ3wCSNhWp1DjzMR8E=s32-c" },
    { name: "Sameer Ahmed", avatar: "https://lh3.googleusercontent.com/a/ACg8ocI36RLfHRrfxt8hX0EXnXW2ZtkmbdpaiI0TRrW5Zl_t_Shfeg=s32-c-mo" },
    { name: "Faraz Ali", avatar: "https://lh3.googleusercontent.com/a/ACg8ocKXZ94wO1GuVlqXk1iLqCjac9hkrdBGPe7p3ZLDN_cNwS7-w80=s32-c-mo" },
    { name: "Farhan Ali", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUG5m-EyEbDuGDR61eCwzZ2HcQ7ZeWczauNHal3KVbtFaWT5IBe=s32-c" },
    { name: "Kamran Ali", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXwyQzx_s7ncorHFqRslz345evZWnMoWdY4GCucK-F5YJlpeQs=s32-c" },
    { name: "Naveed Ali", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVSFClV6nshqNILGmWgiz49--LxGKQfd58Hu9ns2s4tHYU5nfY=s32-c" },
    { name: "Shahban Ali", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJB4InsrYGQNGe6Ev5Zp9A2QjB9Ka55QOFn2s7YyoCm9AcpbA=s32-c-mo" },
    { name: "Naina Arijo", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVNOftLqUtvQF9y5aqrhG7ETZBbrTmOQazK2tM_N-Wg7uFY_Q=s32-c" },
    { name: "Muhammad Aurif Solangi", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUB9ELWlZtPwIcJANeyE3PYZad03sD2Qasv7nanyvhwfqVT5Bs=s32-c" },
    { name: "Shagufta Bhayo", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWyfbIIg2_GWz029Var93ervHPFLr4WmImiCBKGcExEU0Pg1ntg=s32-c" },
    { name: "Duaa Batool Chachar", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXv90NIYhwpGIiqVfbozV1HBgJSaH1l8X60lqtHh2Fqzz1GlIk=s32-c" },
    { name: "Ahsan Ali Channa", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVufZI1Gdup2fNYJcq0Sr4ViwYg7XcrJWDsiOgdMfC8bS2aAts=s32-c" },
    { name: "Abubakar Chohanxwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXN-OFIr7MN9pN13YqWsr6EUSb1clnAOq5w0so4X70ZPZvRKCJ3=s32-c" },
    { name: "Muhammad Haris", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUaY_WeLD7HrgNuqAdYQ2zej68_RsIcU8odIDPhxeBjlHOxb8Q=s32-c" },
    { name: "MuhaMmaD HasNain", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUp2SS8eZEnS-nn5DymJY83UjWdYQnMxTcz71ExFXmXU-aayW8=s32-c" },
    { name: "MUNEER Hussain", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ6SdVXWEADTfMopzDEkqehkT9A7ngetUeCDrzEi8XIlrv4hQ=s32-c-mo" },
    { name: "Iqra Hyder", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW9q6ggFXRXGS0C6g7RUMo3pq44hc4N1L_a4cg3DtRHpCjK9ROV=s32-c" },
    { name: "Abdul Jabbar", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJGeJ-hnMiC8yBCHv7PBlBIgQjiTdT7IolGACMSqA1ZpxvmHw=s32-c-mo" },
    { name: "Abdul Jaleel", avatar: "https://lh3.googleusercontent.com/a/ACg8ocI4T2Fs64Jj4V4Jur5BpYh-YrGWVj5PJ9bHBaWme0N7S7-8GA=s32-c-mo" },
    { name: "Noor Mustafa Jatoi", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXQtT8zK-doFR-71dNiI5CF80WxOSibTSF9Mv4p-thznW1T6loj=s32-c" },
    { name: "Anmol Khuwaja", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUMqc8jQZKm6637taU5-r-UAiJ4juoXMGotN3T8xPDpLKXv0pRb=s32-c" },
    { name: "Rania Kolachi", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXHnnnRVHpEv2vBOAYxhdkENjvlPJxTxk84oXJMH8ihBtWL34t8=s32-c" },
    { name: "Muhammad Meeral", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVQBAHV5SPm87l-CK6XZN3ceF_Q2i3n07Df-ZojjTcnA7KWwx5G=s32-c" },
    { name: "Hira Mithani", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWa_XiY48u0y4L8C7gwzADxCF41eU8MNOLXTNQ7zgFKPp7aZVY=s32-c" },
    { name: "Kousar Parveen", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWJlpRhs3bYmnQl2OE3csQ4JFJY7gue6hcdz4yrUZbEoUWElLY9=s32-c" },
    { name: "Saba Parveen", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbwfo0prBZZwKB4V70h7poGsOp6a_y7BF3CEod5yLpcQVRZCyU=s32-c" },
    { name: "Muqadas Fatima Rahoojo", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUtuHtpKN035u5rmwoRSaKpra62gU2z7TAf59R6iU-y1S5uqzKF=s32-c" },
    { name: "Reena Naz Rahoojo", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUDRnPmRDDgzCwBXTsYNOkQAtIPZCK0CnTIOl_dRSq5qfg6NDM=s32-c" },
    { name: "Abdul Saboor", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ5gwL-nGnz99WcKJ0sGrgC1UWagbQQNiNNFqg3XjRiu_zCkec=s32-c-mo" },
    { name: "Muhammad Sameer", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUU_ZIXrgmoC83vs47vmkRe--zlqOsu2atXvO0qQ-lVVFHgq1VO=s32-c" },
    { name: "Ayesha Sana", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU88wh9X1bVqjAZHsPUlxCpl-cf1qQtbboRm_aDgObOy4ISNVA=s32-c" },
    { name: "Sania shaikh", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXGQ6iLVi8iJm-GmHulSFjCVurIWoLgqcViUXWelFf5habzlA8=s32-c" },
    { name: "Aasif Solangi", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWWt65bTx6cWz7fRTcAhwuEFnd5ks1DZH4oJgEmPMd2YDiRz68=s32-c" },
    { name: "Iqra Soomro", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX6jM7iCRPwhVIzRuXvV7A7kgFRgg7YKTjhnTtPQhhQjOc17FkK=s32-c" },
    { name: "Asadullah Mangrio xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVBiAx2BguchBO0YIYBrafqkGhFoTZVFqREeJvfeCmU15BD4sqC=s32-c" },
    { name: "Ayaz Ali Xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXy6Y1LinaZrpRvLIWCo0i1136Iss5Wk2n4YZsgOMa_fbiUUnQ=s32-c" },
    { name: "Salar Ahmed xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXALGgDWpdQD94SEZjJ7pnzsx_Y8zGRVXai-g7sj8CrNYradltu=s32-c" },
    { name: "Shumaila. xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUE7195VnpkIHtUwccmDx5Y7dejBMVey559i_Q6GGkuEirbkSY=s32-c" },
    { name: "Zoya xwave", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUjPYlDrBlumTC_GSRZDWMxwcRyjcZDcB9GXpLv7nEnJN5BGBHI=s32-c" },
  ],
};

const People = () => {
  const [activeTab, setActiveTab] = useState("People");
  const [teachersShowAll, setTeachersShowAll] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const visibleTeachers = teachersShowAll
    ? peopleData.teachers
    : peopleData.teachers.slice(0, 3);

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
        flexDirection: { xs: "column", sm: "row" }, // Mobile me column, larger screens par row
      }}
    >
      {/* Tabs Section - Mobile par upar dikhane ke liye */}
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
          order: { xs: -1, sm: 0 }, // Mobile par sabse pehle dikhane ke liye
        }}
      >
        <Tab
          label="Stream"
          value="Stream"
          component={Link}
          to="/pdclass"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
        <Tab
          label="Classwork"
          value="Classwork"
          component={Link}
          to="/classwork2"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
        <Tab
          label="People"
          value="People"
          component={Link}
          to="/people2"
          sx={{ textTransform: "none", fontWeight: "medium" }}
        />
      </Tabs>

      {/* Icons Section - Mobile par neeche dikhane ke liye */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2 },
          alignItems: "center",
          flexShrink: 0,
          minWidth: "fit-content",
          flexDirection: { xs: "row", sm: "row" }, // Icons ek line me rahe har screen par
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



      {/* Teachers Section */}
      <Box
      sx={{
        maxWidth: { xs: "100%", md: 600 },
        mx: "auto",
        my: 4,
        p: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="h6" sx={{ pb: 3, borderBottom: "2px solid rgba(106, 110, 116, 0.07)" }}>
        Teachers
      </Typography>
      <List>
        {visibleTeachers.map((teacher, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: "1px solid lightgray",
              pb: 2, mb: 1,
              "&:last-child": { borderBottom: "none" }, 
            }}
          >
            <ListItemAvatar>
              <Avatar src={teacher.avatar} alt={teacher.name} />
            </ListItemAvatar>
            <ListItemText primary={teacher.name} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => setTeachersShowAll(!teachersShowAll)}
          sx={{ mt: 3, backgroundColor: "#e3eefc" }}
        >
          {teachersShowAll ? "View Less" : "View All"}
        </Button>
      </Box>
    </Box>

      {/* Classmates Section - All students are shown with no toggle button */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: 600 },
          mx: "auto",
          my: 4,
          p: { xs: 2, md: 0 },
        }}
      >
      <Typography
  variant="h5"
  sx={{
    pb: 3,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "2px solid rgba(106, 110, 116, 0.07)",
  }}
>
  <span>Classmates</span>
  <span>({peopleData.classmates.length} students)</span>
</Typography>

      
<List>
  {peopleData.classmates.map((student, index) => (
    <ListItem
      key={index}
      sx={{ borderBottom: "1px solid #ccc", pb: 2, mb: 1, width: "100%" }}
    >
      <ListItemAvatar>
        <Avatar src={student.avatar} />
      </ListItemAvatar>
      <ListItemText primary={student.name} />
    </ListItem>
  ))}
</List>
      </Box>
    </>
  );
};

export default People;

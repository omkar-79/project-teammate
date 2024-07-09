import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FixedSizeList } from 'react-window';
import bgImage from 'assets/images/bg-sign-in-basic.jpeg';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import SimpleFooter from 'examples/Footers/SimpleFooter';
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import PerfectScrollbar from 'react-perfect-scrollbar';
import MKBox from "components/MKBox";
import SimpleModal from '/Users/omkar/Documents/Project/Project_teammate/project-teammate/src/pages/threadmodal/SimpleModal';
import Post from 'blocks/posts'; // Import the Post component from Post.js
import { Card, CardContent, Typography, IconButton} from '@mui/material';


// Example data for user rankings
const userRankings = [
  { id: 1, username: "User 1", rank: 1 },
  { id: 2, username: "User 2", rank: 2 },
  { id: 3, username: "User 3", rank: 3 },
  { id: 4, username: "User 4", rank: 4 },
  { id: 5, username: "User 5", rank: 5 },
];

function DashboardBasic() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  // Example data for posts
  const posts = [
    { 
      id: 1, 
      projectName: "Project 1", 
      description: "This project focuses on building applications using JavaScript, React, Node.js, and Web technologies.", 
      skills: ["JavaScript", "React", "Node.js", "Web"], 
      coverImage: 'https://i.ibb.co/JnN1VRf/bg-coworking.jpg' 
    },
    { 
      id: 2, 
      projectName: "Project 2", 
      description: "A project leveraging Python, Django, and MySQL for backend development and database management.", 
      skills: ["Python", "Django", "MySQL"], 
      coverImage: 'https://i.ibb.co/JnN1VRf/bg-coworking.jpg' 
    },
    { 
      id: 3, 
      projectName: "Project 3", 
      description: "Developing enterprise applications using Java, Spring Boot, and MongoDB for scalable and robust solutions.", 
      skills: ["Java", "Spring Boot", "MongoDB"], 
      coverImage: 'https://i.ibb.co/JnN1VRf/bg-coworking.jpg' 
    }
    // Add more projects as needed
  ];
  

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />

      {/* Background Box */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure full screen height
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Main Content */}
        <Grid container sx={{ mx: { xs: 2, lg: 7 }, mt: 12, mb: 10, width: '100%' }}>
          <Grid item container xs={12} lg={9}>
            {/* Project Pool Box */}
            <Grid item xs={12} lg={10}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.001)', // Semi-transparent overlay
                  p: 3, // Padding on all sides
                  borderRadius: 2,
                  maxWidth: 1900,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3, // Margin bottom to create space between the title and the list
                  }}
                >
                  <MKTypography variant='h4' component='div' color="white">
                    Project Pool
                  </MKTypography>
                  <MKButton variant='gradient' color='info' onClick={toggleModal}>
                    Create a thread
                  </MKButton>
                </Box>
                <PerfectScrollbar style={{ maxHeight: 600 }}>
                  <FixedSizeList
                    height={600} // Adjust height as needed
                    width="100%"
                    itemSize={240} // Adjust itemSize as needed based on content height
                    itemCount={posts.length}
                    overscanCount={5}
                  >
                    {({ index, style }) => (
                      <div style={{ ...style, padding: '8px' }}>
                        <Post project={posts[index]} />
                      </div>
                    )}
                  </FixedSizeList>
                </PerfectScrollbar>
              </Box>
            </Grid>
          </Grid>

          {/* Rankings Box */}
          <Grid item xs={12} lg={2}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // Opaque background
                color: 'white',
                p: 2, // Padding on all sides
                borderRadius: 2,
                overflow: 'hidden', // Hide overflow to keep it tidy
                maxHeight: '1000px',
              }}
            >
              <MKTypography variant='h5' component='div' gutterBottom sx={{ textAlign: 'center' }}>
                User Rankings
              </MKTypography>
              {/* Example content for user rankings */}
              <div style={{ maxHeight: 600, overflowY: 'auto' }}>
                {userRankings.map((user, index) => (
                  <div key={user.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    <Typography variant="body1" sx={{ width: '20%', textAlign: 'center', pr: 1 }}>
                      {user.rank}
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%', textAlign: 'center', pl: 1 }}>
                      {user.username}
                    </Typography>
                  </div>
                ))}
              </div>
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <MKBox width="100%" position="bottom" zIndex={2} bottom="1.625rem">
          <SimpleFooter light />
        </MKBox>
      </Box>
      <SimpleModal open={modalOpen} onClose={toggleModal} />
    </>
  );
}

export default DashboardBasic;

import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MKButton from "components/MKButton"; // Assuming MKButton is properly imported and configured
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function getRandomColor() {
  const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#581845']; // List of random colors
  return colors[Math.floor(Math.random() * colors.length)];
}


//TO-DO: Align the favorite icon acccording to different devices
function Post({ project }) {
  const { projectName, description, skills, coverImage } = project;

  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite(!favorite);

  return (
    <MKBox sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <MKBox sx={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img
          src={coverImage} // Ensure coverImage is a valid URL pointing to an image on the internet
          alt={projectName}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300'; // Placeholder image in case of loading error
          }}
        />
        
      </MKBox>
      <IconButton
          aria-label="favorite"
          onClick={toggleFavorite}
          sx={{
            position: 'absolute',
            top: 100,
            right: 10,
            color: favorite ? 'red' : 'white',
            zIndex: 1,
          }}
        >
          <FavoriteIcon />
        </IconButton>
      <MKBox sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 2 }}>
        <MKTypography variant="h5" color="white" component="div" sx={{ marginBottom: 'auto', fontWeight: 'bold', color: 'white' }}>
          {projectName}
        </MKTypography>
        <MKTypography variant="body2" color="white" sx={{ marginBottom: '10px', color: 'white' }}>
          {description}
        </MKTypography>
        <MKTypography variant="body2" color="white" sx={{ color: 'white' }}>
          Skills:{" "}
          {skills.map((skill, index) => (
            <MKBox
              key={index}
              component="span"
              sx={{
                ml: 1,
                display: 'inline-block',
                color: 'white', // Skill text color
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '5px',
                  marginBottom: '2px',
                  backgroundColor: getRandomColor(), // Random background color for skills dots
                }}
              />
              <span style={{ color: 'white' }}>{skill}</span>
            </MKBox>
          ))}
        </MKTypography>
        <MKButton variant="gradient" color="info" sx={{ alignSelf: 'flex-end', mt: 'auto' }}>
          Show Interest
        </MKButton>
      </MKBox>
    </MKBox>
  );
}
export default Post;
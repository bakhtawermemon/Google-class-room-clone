import React from 'react'
import { Container, Box, Typography } from '@mui/material';


const EnglishCommunication = () => {
  return (
    <Container sx={{ mt: 5, pt: 5, p: 4 }}>
      <Box sx={{ mx: 'auto' }}>  <Box className="mt-5"
        sx={{
          backgroundImage: `url('https://www.gstatic.com/classroom/themes/English.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0px',
          borderRadius: '8px', 
          marginLeft: '20px', 
          position: 'relative',
        }}
      >
        <Typography
          variant="h3" className='ms-4 mt-5 pt-5'

        >
          English Communication
        </Typography>

        <Typography
          variant="body1" className='ms-4 mt-1 fs-5'

        >
          Cohort 02 - Kingri xWave Team
        </Typography>

      </Box>
      </Box>
      
    </Container>

    
  )
}

export default EnglishCommunication






































import React from 'react'
import { Container, Box, Typography } from '@mui/material';

const PdClass = () => {
  return (

    <Container sx={{ mt: 5, pt: 5, p: 4 }}>
      <Box sx={{ mx: 'auto' }}>  <Box className="mt-5"
        sx={{
          backgroundImage: `url('https://www.gstatic.com/classroom/themes/img_graduation.jpg')`,
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
          Professional Development        </Typography>

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

export default PdClass
import React, { useState } from 'react';
import UploadPage from './UploadPage';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';

const MintButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#98FF98',
  '&:hover': {
    backgroundColor: '#76E576',
  },
}));

const StyledContainer = styled(Container)({
  border: '2px solid #98FF98',
  borderRadius: '8px',
  marginTop: '2rem',
  marginBottom: '2rem',
  padding: '2rem',
  backgroundColor: '#fff',
});

const HomePage = () => {
  const [showUpload, setShowUpload] = useState(false);

  const toggleUploadPage = () => {
    setShowUpload(!showUpload);
  }

  return showUpload ? (
    <StyledContainer>
      <MintButton onClick={toggleUploadPage}>Go Back to Home</MintButton>
      <UploadPage />
    </StyledContainer>
  ) : (
    <StyledContainer>
      <Box textAlign="center" pt={3} mb={3}>
        <h1>Welcome to Suppler</h1>
      </Box>

      <Box mt={4} textAlign="center" backgroundColor='#D0F0C0' mb={4}>
    <img 
         src="https://shorturl.at/ioCUV" 
         alt="Model's Face" 
         width="350" 
         height="150" 
         style={{ border: '2px solid #98FF98', borderRadius: '30px',padding:'10px' }}
    />
    <h2>Analyze your skin today!</h2>
    <p>Snap a photo</p>
    <p>Get personalized insights</p>
    <MintButton variant="outlined" onClick={toggleUploadPage}>Upload</MintButton>
</Box>


      <Box mt={4} textAlign="center" backgroundColor='#D0F0C0'mb={4}>
        <h2>Discover your perfect skincare routine</h2>
        <Box mt={2} mb={2} display="flex" justifyContent="center" gap="10px">
          <MintButton size="small">All</MintButton>
          <MintButton size="small">Dry</MintButton>
          <MintButton size="small">Oily</MintButton>
          <MintButton size="small">Sensitive</MintButton>
        </Box>
        <Box display="flex" justifyContent="center" gap="10px">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9sTtpJY5Uzay3t98AgB3uXjSqnNsqlZO3KhMD7NcFA&s" alt="Curly Hair" width="150" style={{ border: '2px solid #98FF98', borderRadius: '10px' }}/>
          <img src="https://shorturl.at/prIQ9" alt="Face" width="150" style={{ border: '2px solid #98FF98', borderRadius: '10px' }}/>
        </Box>

        <Box display="flex" justifyContent="center" gap="10px">
          <img src="https://shorturl.at/ksFGO" alt="Curly Hair" width="150" style={{ border: '2px solid #98FF98', borderRadius: '10px', padding:'10px' }}/>
          <img src="https://shorturl.at/KNRU6" alt="Face" width="150" style={{ border: '2px solid #98FF98', borderRadius: '10px',padding:'10px' }}/>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <IconButton color="primary">
          <HomeIcon />
        </IconButton>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
        <IconButton color="primary">
          <WalletIcon />
        </IconButton>
        <IconButton color="primary">
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </StyledContainer>
  );
}

export default HomePage;



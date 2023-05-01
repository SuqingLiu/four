import type { NextPage } from 'next';
import Card from '../components/Card';
import RefreshButton from '../components/RefreshButton';
import { Box, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div style={{marginTop: '36px'}}>
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="white">
      <Typography variant="h3" align="center" fontWeight="bold" mb={2}>
        Game Lobby
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {[0, 1, 2, 3].map((index) => (
          <Card key={index} cardIndex={index} />
        ))}
      </Box>
      <RefreshButton />
    </Box>
    </div>
  );
};

export default Home;
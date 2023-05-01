import React from 'react';
import { Button } from '@mui/material';

function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" style={{ backgroundColor: 'green' }} onClick={handleRefresh}>
        Refresh
      </Button>
    </div>
  );
}

export default RefreshButton;

import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const CryptoSnackbar = ({ open, handleClose, crypto }) => {
  return (
    <Snackbar open={open}  autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="info" sx={{ width: '50%' }}>
        <img src={crypto.image} alt={crypto.name} style={{ width: '20px', marginRight: '10px' }} />
        {crypto.name} (${crypto.current_price})
      </Alert>
    </Snackbar>
  );
};

export default CryptoSnackbar;

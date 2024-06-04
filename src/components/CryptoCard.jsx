import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CryptoCard = ({ cryptos, onCardClick }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {cryptos.map((crypto) => (
        <Card 
          key={crypto.id} 
          variant="outlined" 
          style={{ margin: '10px', width: 'calc(33% - 20px)', cursor: 'pointer' }} 
          onClick={() => onCardClick(crypto)}
        >
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="row" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <img src={crypto.image} alt={crypto.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                <Typography variant="h6">{crypto.name} ({crypto.symbol.toUpperCase()})</Typography>
              </Box>
            </Box>
            <Typography variant="body2">Current Price: ${crypto.current_price}</Typography>
            <Typography variant="body2">Volume: ${crypto.total_volume}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CryptoCard;

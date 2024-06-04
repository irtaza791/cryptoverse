import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Card } from '@mui/material';
import SearchBar from './SearchBar';
import CryptoCard from './CryptoCard';
import CryptoSnackbar from './CryptoSnackbar';


const AllCoins = () => {

    const [cryptos, setCryptos] = useState([]);
    const [displayedCryptos, setDisplayedCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState(null);

    useEffect(() => {
        const fetchCryptos = async () => {
          const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1');
          const data = await response.json();
          setCryptos(data);
          setDisplayedCryptos(data.slice(0, 10));
        };
    
        fetchCryptos();
      }, []);
    
      const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filteredCryptos = cryptos.filter(crypto =>
          crypto.name.toLowerCase().includes(value) || crypto.symbol.toLowerCase().includes(value)
        );
        setDisplayedCryptos(filteredCryptos.slice(0, 10));
        setCurrentPage(0);
      };
    
      const handlePageChange = (direction) => {
        const newPage = currentPage + direction;
        const startIndex = newPage * 10;
        const endIndex = startIndex + 10;
        setDisplayedCryptos(cryptos.slice(startIndex, endIndex));
        setCurrentPage(newPage);
      };

        const handleCardClick = (crypto) => {
        setSelectedCrypto(crypto);
        setSnackbarOpen(true);
        };
    
      const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
      };


  return (
    <Container>
      <Card style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Top 100 Cryptocurrencies by Volume
        </Typography>
        <SearchBar onChange={handleSearchChange} />
        <CryptoCard cryptos={displayedCryptos} onCardClick={handleCardClick} />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" onClick={() => handlePageChange(-1)} disabled={currentPage === 0}>
            Previous
          </Button>
          <Button variant="contained" onClick={() => handlePageChange(1)} disabled={(currentPage + 1) * 10 >= cryptos.length}>
            Next
          </Button>
          
        </Box>
      </Card>
      {selectedCrypto && (
        <CryptoSnackbar
          open={snackbarOpen}
          handleClose={handleCloseSnackbar}
          crypto={selectedCrypto}
        />
      )}
    </Container>
  );
};

export default AllCoins

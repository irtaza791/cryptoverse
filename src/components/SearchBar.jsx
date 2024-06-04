import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onChange }) => {
  return (
    <Box mb={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Cryptocurrency"
        onChange={onChange}
      />
    </Box>
  );
};

export default SearchBar;

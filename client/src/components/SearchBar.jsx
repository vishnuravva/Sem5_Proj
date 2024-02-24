import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery, searchQuery,placeholder }) => {
    // const [searchTerm, setSearchTerm] = useState('');
    //   const navigate = useNavigate();

    return (
        <Paper
            component='form'
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '10px',
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                ml: { lg: 5 },
                width: { lg: '500px', md: "400px", sm: "300px" }
            }}
        >
            <input
                className='search-bar'
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
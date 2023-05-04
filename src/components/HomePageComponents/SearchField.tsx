import React from 'react'
import {
    Box,
    Typography,
    IconButton,
    TextField
} from '@mui/material'


function SearchField() {

  return (
   <Box 
    sx={{
        background: 'rgba(0, 0, 0, 0.4)',
        padding: 15,
        height: '30rem',
        textAlign: 'center'
    }}
    >
    <Typography 
        variant='h2'
        sx ={{
            fontWeight: 'bold',
        }}
    > 
    Eat - Fast 
    </Typography>

    <Typography 
        variant='h5'
        sx={{

        }}
    > 
    {/* Venez decouvrir les meileurs plats de votre ville */}
    La magie de deguster chez soi
    </Typography>

    <Box 
        component='form'  
        sx ={{ 
            background: 'white',
            borderRadius: 1, 
            marginTop: 5, 
            marginLeft: 21, 
            maxWidth: '70%'
        }}
    >
        <TextField
            variant='filled'
            id='searchBar'
            label ='Recherche'
            size='medium'
            fullWidth
        >
            <IconButton
                type='submit'
                aria-label='search'
            >
            </IconButton>

        </TextField>
    </Box>
   
   
   </Box>
    
  )
}

export default SearchField
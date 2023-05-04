import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardActionArea,
} from '@mui/material' 

function RestoField() {

    
  return (
    <Box 
    sx={{
        m: 6,
        mt: 9,
        pl: 1
    }}
    >
        <Typography variant='h4'>
            Restaurants
        </Typography>
        <Typography variant='h6'>
            Voir les restaurants, cafe, pubs et bien d'autre
        </Typography>

        <Box
            sx={{
                display: 'flex',
                p: '0rem',
                ml: '-1rem'
            }}
        
        >
            <Card 
            sx={{ 
                maxWidth: 345, 
                m: 2,
                borderRadius: 3 
            }}
            >
            <CardActionArea>
                <CardMedia
                component="img"
                height="280"
                image="./images/spice4.jpg"
                alt=""
                />
               
            </CardActionArea>
            </Card>


            <Card 
            sx={{ 
                maxWidth: 345, 
                margin: 2,
                borderRadius: 3 
            }}
            >
            <CardActionArea>
                <CardMedia
                component="img"
                height="280"
                image="./images/spice4.jpg"
                alt=""
                />
               
            </CardActionArea>
            </Card>

            <Card 
            sx={{ 
                maxWidth: 345, 
                margin: 2,
                borderRadius: 3 
            }}
            >
            <CardActionArea>
                <CardMedia
                component="img"
                height="280"
                image="./images/spice4.jpg"
                alt=""
                />
               
            </CardActionArea>
            </Card>

            <Card 
            sx={{ 
                maxWidth: 345, 
                margin: 2,
                borderRadius: 3 
            }}
            >
            <CardActionArea>
                <CardMedia
                component="img"
                height="280"
                image="./images/spice4.jpg"
                alt=""
                />
               
            </CardActionArea>
            </Card>

        </Box>
    </Box>
  )
}

export default RestoField
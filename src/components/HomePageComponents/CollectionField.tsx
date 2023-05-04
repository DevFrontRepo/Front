import React from 'react'
import {Box} from '@mui/material'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'


function CollectionField() {
  const navigate = useNavigate()
  
  return (
    <Box 
    sx={{
      display:'flex',
      justifyContent: 'center',
      margin: 5,
    }}
    >
    
    <Card sx={{ 
      maxWidth: 445, 
      margin: 2,
      borderRadius: 3 
      }}
    >
      <CardActionArea>
        <CardMedia
          image="./images/cook.jpg"
          component="img"
          height="180"
          alt=""
          onClick={() => {navigate('Login')}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Commander en ligne
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  {/* deuxieme card */}

  <Card sx={{ 
      maxWidth: 445, 
      margin: 2,
      borderRadius: 3 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="180"
          image="./images/cook.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reserver
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  {/* troisime card */}
  <Card sx={{ 
      maxWidth: 445, 
      margin: 2,
      borderRadius: 3 
      }}
    >
      <CardActionArea>
        <CardMedia
          height="180"
          component="img"
          alt=""
          image="./images/cook.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            blawww
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
  )
}

export default CollectionField
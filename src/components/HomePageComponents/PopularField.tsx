import React from 'react'
import {
  Box,
  Link,
  Typography,
  styled
} from '@mui/material'
import food from '../../../public/images/pain.jpg'
import Popular from '../../pages/Popular'
import {useNavigate} from 'react-router-dom'

function PopularField() {

  const navigate = useNavigate()

  const BoxStyle = styled(Box)`
    background-image: url(${food});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 40vh;
    width: 38vh;
    color: #f5f5f5;
    border-radius: 3px;
    transition: 0.5s ease-in-out;

    &:hover {
      transform: translate( 0%, -5%);
      cursor: pointer;
    }
  
  `
  const TypographyStyle = styled(Typography)`
    font-weight: bold;
    padding: 6px;

  `

  const SpanStyle__1 = styled('span')`
    font-size: 15px;
    display: flex;
  `

  return (
    <Box
    sx={{
      m: 6,
      mt: 9,
      pl: 1,
  }}
    
    >
      <Typography variant='h4'>
        Lieux populaires
      </Typography>
      <Typography variant='h6'>
        Visitez-les depuis chez vous
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 4,
          pl: 0,
          flexWrap: 'wrap',
          height: 'auto',
        }}
      >
        <Link onClick={() => {navigate('/Popular')}}>
          <BoxStyle>
            <Box sx={{background: 'rgba(156, 156, 156, 0.1)'}}>
              <TypographyStyle variant='h6'
              > 
                Place city 
                <SpanStyle__1>pointe-noire &#10137; </SpanStyle__1>
              </TypographyStyle>
            </Box>
          </BoxStyle>
        </Link>
        
        <Link onClick={() => {navigate('/Popular')}}>
          <BoxStyle>
            <Box sx={{background: 'rgba(156, 156, 156, 0.1)'}}>
              <TypographyStyle variant='h6'
              > 
                Place city 
                <SpanStyle__1>pointe-noire &#10137; </SpanStyle__1>
              </TypographyStyle>
            </Box>
          </BoxStyle>
        </Link>
        
        <Link onClick={() => {navigate('/Popular')}}>
          <BoxStyle>
            <Box sx={{background: 'rgba(156, 156, 156, 0.1)'}}>
              <TypographyStyle variant='h6'
              > 
                Place city 
                <SpanStyle__1>pointe-noire &#10137; </SpanStyle__1>
              </TypographyStyle>
            </Box>
          </BoxStyle>
        </Link>
       
        <Link onClick={() => {navigate('/Popular')}}>
          <BoxStyle>
            <Box sx={{background: 'rgba(156, 156, 156, 0.1)'}}>
              <TypographyStyle variant='h6'
              > 
                Place city 
                <SpanStyle__1>pointe-noire &#10137; </SpanStyle__1>
              </TypographyStyle>
            </Box>
          </BoxStyle>
        </Link>
        
      </Box>
    </Box>

  )
}

export default PopularField
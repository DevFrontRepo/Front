import React from 'react'
import { 
    AppBar,
    Box, 
    Typography, 
    Dialog,  
    DialogContent, 
    DialogContentText, 
    DialogActions, 
    DialogTitle, 
    Button, 
    styled
} from '@mui/material'
import { useNavigate} from 'react-router-dom'
import Image from '../../../public/images/spice3.jpg'
import SearchField from './SearchField'


function Banner() {

    const Navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
   
    const style = {
        BoxContainer: {
            backgroundImage: `url(${Image})`,            
        }
    }

    const ButtonStyle = styled(Button)`
        color: white;
        font-weight: bold;
        font-size: .9rem;

        &:hover {
            background: white;
            color: black;
        }
    
    ` 

    const ButtonStyled = styled(Button)`
        color: white;
        margin : 1rem

    `

  return (
    <AppBar position='relative'>
        <Box
        style = {style.BoxContainer}
        sx ={{height: '35rem', }}
        >
            <Box 
            sx={{ 
                display: 'flex',
                color:'#FFF',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: 2,
                flexGrow: 1
            }}
            >
                    <Typography variant='h4' component='div' sx={{ flexGrow: 1, color:'white', margin: 1}}>
                        LOGO
                    </Typography>
                    <Typography sx={{ margin: 1}}>
                        <ButtonStyle  onClick={() => {Navigate('Localisation')}} > 
                            Localisation 
                        </ButtonStyle>
                    </Typography>
                    <Typography sx={{ margin: 1}}>
                        <ButtonStyle  onClick={() => {Navigate('Login')}} > 
                            Se connecter 
                        </ButtonStyle>
                    </Typography>
                    <Typography  sx={{ margin: 1}}>
                        <ButtonStyle  onClick={() => {setOpen(true)}}>
                            S'inscrire 
                        </ButtonStyle>                        
                        <Dialog 
                            open={open} 
                            onClose={() => {setOpen(false)}} 
                        >
                                <DialogTitle>Veillez Choisir votre cas</DialogTitle>                                
                                <DialogContent>
                                <DialogContentText variant='h5'>
                                    S'inscrire en tant que client ou vendeur 
                                </DialogContentText>

                                <ButtonStyled variant='contained' onClick = {() => {Navigate('RegisterClient')}} > 
                                Client
                                </ButtonStyled>
                                <ButtonStyled variant='contained' onClick= {() => {Navigate('Register')}} > 
                                Vendeur 
                                </ButtonStyled>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => {setOpen(false)}}>Annuler</Button>
                                </DialogActions>
                        </Dialog>
                </Typography>
            </Box > 
            <SearchField />
        </Box>
    </AppBar> 
  )
}

export default Banner
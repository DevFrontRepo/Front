import {Box} from '@mui/material'
import Banner from '../components/HomePageComponents/Banner';
import CollectionField from '../components/HomePageComponents/CollectionField';
import RestoField from '../components/HomePageComponents/RestoField';
import PopularField from '../components/HomePageComponents/PopularField';


function HomePage() {
  return (
    <Box sx={{margin: -1}}> 
      <Banner />
      <CollectionField />
      <RestoField />
      <PopularField />
    </Box>
  )
}

export default HomePage
import { Box, Typography } from "@mui/material";

function Title() {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant={'h3'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
          Vias
        </Typography>
        <Typography variant={'h3'} color={'#FFBD3E'} fontFamily={'Montserrat'} fontWeight={900}>
          impecáveis,
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant={'h3'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
          ads
        </Typography>
        <Typography variant={'h3'} color={'#E57361'} fontFamily={'Montserrat'} fontWeight={900}>
          imbatíveis!
        </Typography>
      </Box>
      <Box>
        <Typography 
          variant={'h5'}
          textAlign={'left'}
          color={'white'}
          mx={3}
          mt={2}
          fontFamily={'Montserrat'}
          fontWeight={300}
        >
          Transformando as ciclovias em obras-primas e dando mais visibilidade às empresas.
        </Typography>
      </Box>
    </>
  )
}

export default Title;
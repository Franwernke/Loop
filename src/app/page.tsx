"use client"
import { Box, Grid, Typography } from "@mui/material";
import LoopBar from "./LoopBar";
import LoopLogo from "./LoopLogo";

export default function Home() {
  const navItems = ['Quem somos', 'Localidades', 'Serviços', 'Contato'];
  return (
    <Box height={'100vh'}>
      <LoopBar navItems={navItems}/>
      <Box 
        pt={10}
        component="main"
        sx={{ 
          backgroundColor: '#000000',
          width: '100%',
          height: '100%'
        }}
      >
        <Grid container>
          <Grid xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <Box display={'flex'}>
              <Typography variant={'h3'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
                Vias
              </Typography>
              <Typography variant={'h3'} color={'#FFBD3E'} fontFamily={'Montserrat'} fontWeight={900}>
                impecáveis,
              </Typography>
            </Box>
            <Box display={'flex'}>
              <Typography variant={'h3'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
                ads
              </Typography>
              <Typography variant={'h3'} color={'#E57361'} fontFamily={'Montserrat'} fontWeight={900}>
                imbatíveis!
              </Typography>
            </Box>
            <Typography variant={'h4'} textAlign={'center'} color={'white'} mr={1} mt={2} fontFamily={'Montserrat'} fontWeight={300}>
              Transformando as ciclovias em obras-primas e dando mais visibilidade às empresas.
            </Typography>
          </Grid>
          
          <Grid xs={8}>
            <LoopLogo/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

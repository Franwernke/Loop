"use client"
import { Box, Button, Grid, Typography } from "@mui/material";
import LoopBar from "./LoopBar";
import LoopLogo from "./LoopLogo";
import styled from "styled-components";

const BlackBox = styled(Box)`
  background-color: black;
`;

const StyledButtonRed = styled(Button)`
  background-color: #EE4848;
  color: white;
  margin-right: 30px;
  padding: 22px 47px;
  font-size: 16px;
  :focus {
    background-color: #FF5050;
  }
`

const StyledButtonBlack = styled(Button)`
  background-color: black;
  color: white;
  border: 2px white solid;
  padding: 22px 47px;
  font-size: 16px;
`

export default function Home() {
  const navItems = ['Quem somos', 'Localidades', 'Serviços', 'Contato'];
  return (
    <Box height={'100vh'} margin={'-8px'}>
      <LoopBar navItems={navItems}/>
      <BlackBox 
        pt={12}
        component="main"
        sx={{ 
          width: '100%',
          height: '100%'
        }}
      >
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} ml={2} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} justifyContent={'center'}>
              <Typography fontSize={'53px'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
                Vias
              </Typography>
              <Typography fontSize={'53px'} color={'#FFBD3E'} fontFamily={'Montserrat'} fontWeight={900}>
                impecáveis,
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
              <Typography fontSize={'53px'} color={'white'} mr={1} fontFamily={'Montserrat'} fontWeight={900}>
                ads
              </Typography>
              <Typography fontSize={'53px'} color={'#E57361'} fontFamily={'Montserrat'} fontWeight={900}>
                imbatíveis!
              </Typography>
            </Box>
            <Box>
              <Typography variant={'h5'} textAlign={'center'} color={'white'} mr={1} mt={2} fontFamily={'Montserrat'} fontWeight={300}>
                Transformando as ciclovias em obras-primas e dando mais visibilidade às empresas.
              </Typography>
            </Box>
          </Grid>

          <Grid display={'flex'} justifyContent={'center'} my={3} xs={12}>
            <StyledButtonRed>Advertise</StyledButtonRed>
            <StyledButtonBlack>Acessar Localizações</StyledButtonBlack>
          </Grid>
          
          <Grid display={'flex'} item xs={12} justifyContent={'center'} alignItems={'center'}>
            <LoopLogo/>
          </Grid>
        </Grid>
      </BlackBox>
    </Box>
  )
}

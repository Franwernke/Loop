"use client"
import { Box, Typography } from "@mui/material";
import LoopBar from "./LoopBar";
import LoopLogo from "./LoopLogo";

export default function Home() {
  const navItems = ['Quem somos', 'Localidades', 'Serviços', 'Contato'];
  return (
    <>
      <LoopBar navItems={navItems}/>
      <Box 
        mt={8}
        component="main" 
        sx={{ 
          backgroundColor: '#000000',
          width: '100%',
          height: '100%'
        }}
      >
        <LoopLogo/>
      </Box>
    </>
  )
}

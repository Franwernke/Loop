"use client"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

function LoopBar() {
  const navItems = [
    {
      label: 'Quem somos',
      href: 'sobreNos'
    }, 
    {
      label: 'Localidades',
      href: 'localidades'
    },
    {
      label: 'Serviços',
      href: 'servicos'
    },
    {
      label: 'Contato',
      href: 'contato'
    },
  ];

  return (
    <AppBar sx={{ backgroundColor: '#000000'}} component="nav">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          LOOP
        </Typography>
        {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <Button sx={{ color: '#fff', px: 2 }}>
                {item.label}
              </Button>
            </Link>
          ))}
        </Box> */}
      </Toolbar>
    </AppBar>
  )
}

export default LoopBar
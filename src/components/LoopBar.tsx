"use client"
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import Link from "next/link";
import { useState } from "react";

function LoopBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
        <Box sx={{ display: {xs: 'block', sm:'none'}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          LOOP
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <Button sx={{ color: '#fff', px: 2 }}>
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{display: 'flex', height: '100%', bgcolor: 'black', color: 'white'}}>
            <List>
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <ListItem sx={{color: 'white', textDecoration: 'none'}} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default LoopBar
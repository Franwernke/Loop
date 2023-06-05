"use client"
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

interface LoopBarProps {
  navItems: string[]
}

function LoopBar({ navItems }: LoopBarProps) {
  return (
    <AppBar sx={{ backgroundColor: '#000000'}} component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          LOOP
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff', px: 2 }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default LoopBar
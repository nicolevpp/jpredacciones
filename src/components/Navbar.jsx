import { AppBar, Box, Container, Toolbar, Typography, IconButton, List, ListItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

export default function Navbar (){

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
        JPRedacciones
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: '1rem' }}>
            <a href="#">Holis</a>
            <a href="#">Holis</a>
            <a href="#">Holis</a>
          </Box>
          <Box
            sx={{
              display: { md: 'none' },
            }}>
            <IconButton onClick={() => setOpen(true)} >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        anchor="right">
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ClearIcon />
          </IconButton>
        </div>
        <Divider/>
        <List sx={{ width: '50vw' }}>
          <ListItem>
            <a href="#">Servicios</a>
          </ListItem>
          <ListItem>
            <a href="#">Portafolio</a>
          </ListItem>
          <ListItem>
            <a href="#">Contacto</a>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
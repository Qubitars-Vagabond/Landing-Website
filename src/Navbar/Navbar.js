import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Stack,
  AppBar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Headerstyle from "./Navbar.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Logo from "../Images/Vagabond Logo.png";
import Grid from '@mui/material/Grid';

function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    <Link to="/home" style={Headerstyle.linkstyle}>
      <Typography>Home </Typography>
    </Link>,
    <Link to="/about" style={Headerstyle.linkstyle}>
      <Typography> About </Typography>
    </Link>,
    <Link to="/product" style={Headerstyle.linkstyle}>
      <Typography>Features </Typography>
    </Link>,

    <Link to="/Shoppingcartpage" style={Headerstyle.linkstyle}>
      <Typography>Get Application </Typography>
    </Link>,
  ];
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Divider />
      <List>
        <img src={Logo} style={{width: "100%"}} />
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{textAlign: "center"}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar position="static" sx={Headerstyle.Appbarstyle}>
        <Toolbar disableGutters variant="dense">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{ display: {lg: "none", xs: "flex" },color:"black"}} >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{display: {xs:'none',sm:'block'}}}>
            <img
              src={Logo}
              alt="logo"
              className="logo-image"
              onClick={() => navigate("/")}
              style={{cursor:"pointer"}}
            />
          </Box>
          <Grid container>
          <Grid  xs={10}
           sx={Headerstyle.nav}
          >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              display: { lg: "flex", md: "none", sm: "none", xs: "none"}}}>
              <Link to="/" style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>Home</Typography>
              </Link>
              <Link to="/about" style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>About</Typography>
              </Link>
              <Link to="/features" style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>Features</Typography>
              </Link>
              <Link to="/getapplication" style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>
                  Get Application
                </Typography>
              </Link>
              
              <Stack direction="row">
                <Link to="/login" style={Headerstyle.linkstyle}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="quote-button"
                    sx={Headerstyle.QuoteButton}
                    onClick={() => navigate("/getintouch")}
                  >
                    Get in Touch
                  </Button>
                </Link>
              </Stack>
        
          </Box>

            </Grid>
          </Grid>

         
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;

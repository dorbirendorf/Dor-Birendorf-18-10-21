import * as React from 'react';
import {
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Link
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { connect } from 'react-redux';

const Navbar = ({ theme:{darkMode}}) => {
 

  return (
    
      <AppBar position="fixed" sx={{bgcolor:darkMode?'#343a40':'#f8f9fa',
      color:darkMode? '#f8f9fa':'#343a40'}}>
        <Toolbar>
          <Link href="/" color="inherit" underline='none' >
          <WbSunnyIcon />
          </Link>
          <Typography   variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dor-Weather
          </Typography>
          <Button href="/favorites" color="inherit" >
            favorites
          </Button>
          <Button href="/" color="inherit">
            home
          </Button>
        </Toolbar>
      </AppBar>
   
  );
};

const mapStateToProps = (state) => ({
  theme:state.theme
});

export default connect(mapStateToProps, {
})(Navbar);

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
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { toggleDark, toggleDegrees } from '../state/actions/themeActions';
import { connect } from 'react-redux';

const Navbar = ({ weather, toggleDark, toggleDegrees }) => {
  const handleToggleDark = () => {
    console.log('dark');
    toggleDark();
  };
  const handleToggleDegrees = () => {
    console.log('degrees');
    toggleDegrees();
  };

  return (
    
      <AppBar position="fixed">
        <Toolbar>
          <WbSunnyIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dor-Weather
          </Typography>

          <FormGroup >
            <FormControlLabel
              control={<Switch onChange={handleToggleDark} />}
              label="Dark"
            />
            <FormControlLabel
              control={<Switch onChange={handleToggleDegrees} />}
              label="C°/F°"
            />
          </FormGroup>
          
          <Button href="/favorites" color="inherit">
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
  weather: state.weather,
  theme:state.theme
});

export default connect(mapStateToProps, {
  toggleDark,
  toggleDegrees,
})(Navbar);

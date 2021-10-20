import * as React from 'react';
import {
  Switch,
  FormGroup,
  FormControlLabel,
  Toolbar,
  AppBar,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { toggleDark, toggleDegrees } from '../state/actions/themeActions';
import { connect } from 'react-redux';

const Footer = ({ toggleDark, toggleDegrees }) => {
  const handleToggleDark = () => {
    console.log('dark');
    toggleDark();
  };
  const handleToggleDegrees = () => {
    console.log('degrees');
    toggleDegrees();
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>

        
          <FormControlLabel
            control={<Switch onChange={handleToggleDark}/>}
            label="Light / Dark"
          />
          
          <FormControlLabel
            control={<Switch onChange={handleToggleDegrees} />}
            label="C° / F°"
          />

        
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, {
  toggleDark,
  toggleDegrees,
})(Footer);
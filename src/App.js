import HomeScreen from './components/pages/HomeScreen';
import Favorites from './components/pages/Favorites';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import darkBack from './assets/darkBack.png';
import lightBack from './assets/lightBack.jpg';
import Footer from './components/Footer';
import Alert from './components/layout/Alert'
import { connect } from 'react-redux';

import './App.css';

function App({theme}) {
  const{darkMode}=theme
  const styles = darkMode
    ? {
      background: `url(${darkBack}) `,
      backgroundSize: 'cover',
      minHeight: '100vh',
      color: 'white',
    }
    :{
      background: `url(${lightBack})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      color: 'black',
    } 

  return (
    <div className="App" style={styles}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          
          <Alert/>
          <Grid item xs={12} marginTop={10}>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/favorites" component={Favorites} />
            </Switch>
            <Grid item xs={12} marginTop={10}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, null)(App);



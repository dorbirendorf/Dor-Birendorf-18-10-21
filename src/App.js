import HomeScreen from './components/pages/HomeScreen';
import Favorites from './components/pages/Favorites';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import darkBack from './assets/darkBack.png';
import lightBack from './assets/lightBack.jpg';
import Footer from './components/Footer';

import './App.css';

function App() {
  //  const styles={
  //   background: `url(${lightBack}) no-repeat`,
  //   backgroundSize: 'cover',
  //   backgroundColor: '#2197c9',
  //   minHeight: '100vh',
  //   color: 'black',
  //  }
  const styles = {
    background: `url(${darkBack}) no-repeat`,
    backgroundSize: 'cover',
    backgroundColor: '#1c2949',
    minHeight: '100vh',
    color: 'white',
  };

  return (
    <div className="App" style={styles}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
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

export default App;

{
  /* 
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */
}

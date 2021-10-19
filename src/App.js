import HomeScreen from './components/pages/HomeScreen';
import Favorites from './components/pages/Favorites';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Navbar />
          </Grid>
          <Grid item xs={12} marginTop={10} > 
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
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

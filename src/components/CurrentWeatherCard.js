import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {getCurrentWeather,setCurrentLocation,setMyLocation,} from '../state/actions/weatherApiActions';
import {CardContent,CardHeader,Typography,Grid,CardActions,IconButton,Card,} from '@mui/material';
import Spinner from './layout/Spinner';
import WeatherIcon from './layout/WeatherIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {removeFavorite,getFavorites,addFavorite,checkIfFavoriteExist,} from '../utils/ManageFavorites';
import {formatTemp,} from '../utils/format';


const CurrentWeatherCard = ({
  getCurrentWeather,setMyLocation,
  weather: { location, currentWeather, loading },
  theme: { celcius, darkMode },
}) => {

  const [toggleFavorite, setToggleFavorite] = useState(false);

  useEffect(() => {
    if (!location) {
        navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation(position.coords.latitude, position.coords.longitude);
      });
    } else {
        getCurrentWeather(location.Key);
        setToggleFavorite(checkIfFavoriteExist(location.Key));
    }
  }, [location, setCurrentLocation]);

  const handleFavoriteClick = () => {
    checkIfFavoriteExist(location.Key)
      ? removeFavorite(location.Key)
      : addFavorite(location);
    setToggleFavorite(!toggleFavorite);
    console.log(getFavorites(), toggleFavorite);
  };

  return (
    <div>
      {loading ? (
        Spinner
      ) : (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Card sx={{
            width: '50%',
            marginBottom: 6 ,
            bgcolor:darkMode?'#343a40':'#f8f9fa',
            color:darkMode? '#f8f9fa':'#343a40'
            }}>
            <CardHeader
              title={
                <Typography align="center" variant="h4">
                  {location.name}
                </Typography>
              }
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <WeatherIcon
                number={currentWeather[0].WeatherIcon}
                xs={12}
                sx={{ maxHeight: 200, maxWidth: 200 }}
              />
              <Typography variant="h5">
                {formatTemp(
                  currentWeather[0].Temperature.Metric.Value,
                  celcius
                )}
              </Typography>
              <Typography variant="p">{currentWeather[0].WeatherText}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton onClick={handleFavoriteClick} color="error">
                {toggleFavorite ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme: state.theme,
});

export default connect(mapStateToProps, {
  getCurrentWeather,setMyLocation,
})(CurrentWeatherCard);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getCurrentWeather,
  setCurrentLocation,
  getFiveDaysWeather,
  setMyLocation,
} from '../state/actions/weatherApiActions';
import {
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Box,
  Grid,
  CardActions,
  Button,
  IconButton,
  Card,
} from '@mui/material';
import Spinner from './layout/Spinner';
import WeatherIcon from './layout/WeatherIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {
  removeFavorite,
  getFavorites,
  addFavorite,
  checkIfFavoriteExist,
} from '../utils/ManageFavorites';
import { AlignVerticalCenter } from '@mui/icons-material';
import {
  formatDate,
  convertToFarenheit,
  formatMinMax,
  formatTemp,
} from '../utils/format';

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position.coords.latitude, position.coords.longitude);

// getCurrentWeather(225678);
// setToggleFavorite(checkIfFavoriteExist(225678));

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
          <Card sx={{ width: '50%', marginBottom: 6 }}>
            <CardHeader
              sx={{ background: 'ghostwhite' }}
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
              <Typography variant="p">sunny</Typography>
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

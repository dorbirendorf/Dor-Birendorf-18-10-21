import React, { useEffect } from 'react';
import { getFavorites } from '../../utils/ManageFavorites';
import SmallConditionsCard from '../SmallConditionsCard';
import { connect } from 'react-redux';
import { getFavoriteWeather } from '../../state/actions/weatherApiActions';
import { Grid, Typography,  } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Favorites = ({ weather, theme, getFavoriteWeather }) => {
  useEffect(() => {
    const favorites = getFavorites();
    favorites.forEach((location) => {
      getFavoriteWeather(location);
    });
  }, [getFavoriteWeather]);

  const FavoriteWeatherCards = weather.favoritesWeather.map(
    (favoriteLocation) => (
      <Grid item xs={12} md={4} lg={2} Key={favoriteLocation.location.Key}>
          <SmallConditionsCard data={favoriteLocation} />
      </Grid>
    )
  );

  return (
    <div>
      <Typography variant='h3' textAlign='center'>Favorites <FavoriteIcon color="error"/></Typography>

    <Grid container spacing={2}>
      {FavoriteWeatherCards}
    </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme: state.theme,
});

export default connect(mapStateToProps, { getFavoriteWeather })(Favorites);

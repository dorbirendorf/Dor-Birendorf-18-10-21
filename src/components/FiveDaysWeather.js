import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from './layout/Spinner';
import { Grid, Typography, Box } from '@mui/material';

import {
  getCurrentWeather,
  getFiveDaysWeather,
} from '../state/actions/weatherApiActions';
import { FiveDaysForcastCard } from './FiveDaysForcastCard';

const FiveDaysWeather = ({
  getFiveDaysWeather,
  weather: { location, fiveDaysWeather, loading },
  theme: { celcius, darkMode },
}) => {
  useEffect(() => {
    if (!location) {
      getFiveDaysWeather(225678);
    } else {
      getFiveDaysWeather(location.Key);
    }
  }, [location, getFiveDaysWeather]);

  return (
    <div>
      {!fiveDaysWeather ? (
        Spinner
      ) : (
        <div>
          <Box>
            <Grid
              container
              sx={{ justifyContent: 'center', justifyContent: 'space-evenly' }}
            >
              {fiveDaysWeather.DailyForecasts &&
                fiveDaysWeather.DailyForecasts.map((dayForecast) => (
                  <Grid item xs={6} sm={2}>
                    <FiveDaysForcastCard
                      forecast={dayForecast}
                      degrees={celcius}
                      darkMode={darkMode}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme: state.theme,
});

export default connect(mapStateToProps, {
  getFiveDaysWeather,
})(FiveDaysWeather);


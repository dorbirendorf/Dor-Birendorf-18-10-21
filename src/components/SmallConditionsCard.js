import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@mui/material';
import WeatherIconSmall from './layout/WeatherIconSmall';
import {
  formatDate,
  convertToFarenheit,
  formatMinMax,
  formatTemp,
} from '../utils/format';
import { connect } from 'react-redux';
import { setCurrentLocation } from '../state/actions/weatherApiActions';
import { useHistory } from 'react-router-dom';

const SmallConditionsCard = ({ data, theme, setCurrentLocation }) => {
  const { location, weather } = data;
  const { darkMode, celcius } = theme;
  let history = useHistory();

  const handleClick = () => {
    setCurrentLocation(location);
    history.push('/');
  };
  return (
    <div>
      <Card
        sx={{
          inlineSize: 'fit',
          bgcolor: darkMode ? '#343a40' : '#f8f9fa',
          color: darkMode ? '#f8f9fa' : '#343a40',
          textAlign: 'center',
        }}
      >
        <CardHeader
          onClick={handleClick}
          title={
            <Typography align="center" variant="h5">
              {location.name}
            </Typography>
          }
        />
        <CardContent>
          <WeatherIconSmall
            number={weather[0].WeatherIcon}
            xs={12}
            sx={{ maxHeight: 200, maxWidth: 200 }}
          />
          <Typography variant="h6">{weather[0].WeatherText}</Typography>
          <Typography variant="p">
            {formatTemp(weather[0].Temperature.Metric.Value, celcius)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Learn More{' '}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme: state.theme,
});

export default connect(mapStateToProps, { setCurrentLocation })(
  SmallConditionsCard
);

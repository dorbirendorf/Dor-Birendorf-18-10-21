import React from 'react';
import SearchBox from '../SearchBox';
import CurrentWeatherCard from '../CurrentWeatherCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FiveDaysWeather from '../FiveDaysWeather';

export const HomeScreen = ({ weather }) => {
  return (
    <div>
      <SearchBox />
      <CurrentWeatherCard />
      <FiveDaysWeather />
    </div>
  );
};

HomeScreen.propTypes = {
  weather: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps, null)(HomeScreen);

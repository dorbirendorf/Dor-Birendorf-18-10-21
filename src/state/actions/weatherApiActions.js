import {
  LOCATIONS_AUTOCOMPLETE_SUCCESS,
  LOCATIONS_AUTOCOMPLETE_ERROR,
  CURRENT_WEATHER_FAIL,
  CURRENT_WEATHER_SUCCESS,
  FIVE_DAYS_FAIL,
  FIVE_DAYS_SUCCESS,
  CURRENT_LOCATION_UPDATE,
  FAVORITES_WEATHER_SUCCESS,
  FAVORITES_WEATHER_FAIL,
} from './types';
import axios from 'axios';
import { setAlert } from './alertActions';

const api = [
  'Zct9JiWDGrs5loLq7s9dMgW0ySp5Bsp2',
  'SBAMTrQzOvBi5NGeuxMI72DNOGPsCJKv',
  '8MIzGGl33vxvfOwRUAaO7amkjot7RP42',
];

var accuWeatherApiKey = api[Math.floor(Math.random() * api.length)];

export const locationsAutocomplete = (searchInput) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${searchInput}`
    );

    dispatch({
      type: LOCATIONS_AUTOCOMPLETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errors = error.response;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, 'danger'));
      });
    }
    dispatch({
      type: LOCATIONS_AUTOCOMPLETE_ERROR,
      payload: error.message,
    });
  }
};

export const setCurrentLocation = (location) => async (dispatch) => {
  dispatch({
    type: CURRENT_LOCATION_UPDATE,
    payload: location,
  });
};

export const setMyLocation = (lat, lon) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat},${lon}&apikey=${accuWeatherApiKey}`
    );
    const { Key } = data;
    dispatch({
      type: CURRENT_LOCATION_UPDATE,
      payload: {
        Key: Key,
        name: data.LocalizedName,
      },
    });
  } catch (error) {}
};

export const getCurrentWeather = (locationKey) => async (dispatch) => {
  if (locationKey) {
    try {
      const { data } = await axios.get(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${accuWeatherApiKey}`
      );

      dispatch({
        type: CURRENT_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CURRENT_WEATHER_FAIL,
        payload: error.message,
      });
    }
  }
};

export const getFiveDaysWeather = (locationKey) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${accuWeatherApiKey}&metric=true`
    );

    dispatch({
      type: FIVE_DAYS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIVE_DAYS_FAIL,
      payload: error.message,
    });
  }
};

export const getFavoriteWeather = (location) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${location.Key}?apikey=${accuWeatherApiKey}`
    );
    dispatch({
      type: FAVORITES_WEATHER_SUCCESS,
      payload: {
        weather: data,
        location: location,
      },
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_WEATHER_FAIL,
      payload: error.message,
    });
  }
};

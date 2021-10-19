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
} from '../actions/types';

const initialState = {
  autoCompleteLocations: [],
  location: null,
  currentWeather: null,
  fiveDaysWeather: null,
  favoritesWeather: [],
  loading: true,
  error: {},
};

function weatherApiReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATIONS_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        autoCompleteLocations: action.payload,
      };
    case LOCATIONS_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWeather: action.payload,
      };
    case CURRENT_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FIVE_DAYS_SUCCESS:
      return {
        ...state,
        fiveDaysWeather: action.payload,
      };
    case FIVE_DAYS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CURRENT_LOCATION_UPDATE:
      return {
        ...state,
        location: action.payload,
      };
    case FAVORITES_WEATHER_SUCCESS:
      return {
        ...state,
        favoritesWeather:[action.payload, ...state.favoritesWeather],
      };
    case FAVORITES_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default: {
      return state;
    }
  }
}

export default weatherApiReducer;

import { combineReducers } from 'redux';
import weatherApiReducer from './weatherApiReducer';
import themeReducer from './themeReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  weather: weatherApiReducer,
  theme: themeReducer,
  alerts: alertReducer,
});

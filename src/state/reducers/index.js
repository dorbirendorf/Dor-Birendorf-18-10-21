import { combineReducers } from 'redux';
import weatherApiReducer from './weatherApiReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  weather: weatherApiReducer,
  theme: themeReducer,
});

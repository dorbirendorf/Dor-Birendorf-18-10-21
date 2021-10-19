import { TOGGLE_DARK, TOGGLE_CELCIUS } from '../actions/types';

const initialState = {
  darkMode: false,
  celcius: true,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case TOGGLE_CELCIUS:
      return {
        ...state,
        celcius: !state.celcius,
      };
    default:
      return state;
  }
}
export default themeReducer;

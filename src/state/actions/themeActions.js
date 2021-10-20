import { TOGGLE_CELCIUS, TOGGLE_DARK } from './types';
import {setAlert} from './alertActions'

export const toggleDark = () => async (dispatch) =>
  {dispatch({
    type: TOGGLE_DARK,
    payload: null,
  });
}
export const toggleDegrees = () => async (dispatch) =>
  dispatch({
    type: TOGGLE_CELCIUS,
    payload: null,
  });

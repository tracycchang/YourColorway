
import * as types from '../constants/actionTypes';


export const addColorCardActionCreator = newColor => ({
  type: types.ADD_COLOR_CARD,
  payload: newColor,
});

export const addColorActionCreator = newColor => ({
  type: types.ADD_NEW_COLOR,
  payload: newColor,
});

export const deleteCardActionCreator = color => ({
  type: types.DELETE_CARD,
  payload: color,
});


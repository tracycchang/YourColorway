

import * as types from '../constants/actionTypes';

const initialState = {
  totalColors: 0,
  colorList: [],
  newLocation: '',
};


const colorReducer = (state = initialState, action) => {
  let colorList;
  let newColor = {};
  const newState = Object.assign({}, state);
  // console.log(newState); 


  switch (action.type) {
    
    case types.ADD_COLOR_CARD:

      newState.totalColors++;
      // console.log(newState);

      newColor = {
        location: newState.newLocation,
      };
      // assigns colorList to a copy of state.colorList
      colorList = state.colorList.slice();
      colorList.push(newColor);
      newState.colorList = colorList;
      // console.log(newState.colorList.length);
      return newState;


    case types.ADD_NEW_COLOR: 
    
      newState.newLocation = document.getElementById('input').value;
      return newState;
      

    case types.DELETE_CARD: 

      newState.totalColors--;
      console.log(newState.totalColors);

      for (let i = 0; i < newState.colorList.length; i++) {
        if (newState.colorList.length === 0) return newState.colorList;
        else { 
          newState.colorList.pop();
          console.log(newState.colorList);
          return newState.colorList;
        }
      }
      return newState;
      
    default: {
      return state;
    }
  }
};






export default colorReducer;

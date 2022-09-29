
import React from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../actions/actions.js';


// const mapStateToProps = state => ({
//   colors: state.colors,
//   colorList: state.colors.colorList
// });

const mapDispatchToProps = dispatch => ({
  deleteCard : (color) => dispatch(actions.deleteCardActionCreator(color)),
  addColorCard : (newColor) => dispatch(actions.addColorCardActionCreator(newColor)),
  addColor : (newColor) => dispatch(actions.addColorActionCreator(newColor))
});

const ColorSelector = props => {

  const addColorButton = () => {
    const input = document.querySelector('input');
    props.addColor(input.value);
    props.addColorCard(input.value);
    input.value = '';
  };

  const deleteColorButton = () => {
    const input = document.querySelector('button');
    props.deleteCard();
  };


  return(
    <div>
      <h2 id='createTitle'>CREATE OR HATE</h2>
      <hr></hr>
      <br></br>
        GO WILD
      <input type="color" id="colorpicker" value="#fffff"></input>
      <br></br>
      <input id="input" type="text" name="submit" placeholder='ENTER HEX'></input>
      <button id ="button" onClick={addColorButton} > ADD </button>
      <button id="button" name="deleteCard" onClick={deleteColorButton}> DELETE </button>
      
    </div>
  );
};


export default connect(null, mapDispatchToProps)(ColorSelector);
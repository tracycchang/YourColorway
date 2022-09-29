
import React from 'react';
import Swatch from './Swatch.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  colors: state.colors
});

const ColorDisplay = props => {
  const colors = [];
  // console.log(props);
  for (let i = 0; i < props.colorList.length; i++) {
    colors.push(<Swatch colors = {props.colorList[i]}/>);
  }

  return(
    <div id="displayBox">
      <div id="totals">
        <h2 id='createTitle'>DISPLAY</h2>
        <hr></hr>
        <br></br>
        <label htmlFor="totalColors">TOTAL COLORS: </label>
        <span id="totalColors">{props.colors.totalColors}</span>
      </div>
      <br></br>
      {colors}
    </div>
  );
};


export default connect(mapStateToProps, null)(ColorDisplay);
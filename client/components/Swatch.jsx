
import React from 'react';
import { connect } from 'react-redux';


const Swatch = props => {

  return (
    <div id="colorCard" style={{backgroundColor: props.colors.location}}>

      {props.colors.location} 
      
    </div>
  );
};
export default connect (null, null)(Swatch);

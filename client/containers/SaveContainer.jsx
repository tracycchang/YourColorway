
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';
import Save from '../components/Save.jsx'; 

// const mapStateToProps = state => ({
//   totalColors: state.colors.totalColors,
//   colorList: state.colors.colorList
// });

// const mapDispatchToProps = dispatch => ({
//   deleteCard : (color) => dispatch(actions.deleteCardActionCreator(color)),
//   addColorCard : (newColor) => dispatch(actions.addColorCardActionCreator(newColor)),
//   addColor : (newColor) => dispatch(actions.addColorActionCreator(newColor))
// });

class SaveContainer extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    // console.log(this.props.colorList)
    return(
      <div id="save">
        <Save/>
        </div>
    );
  }
}

export default connect(null, null)(SaveContainer);
 
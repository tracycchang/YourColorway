
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateContainer from './CreateContainer.jsx';
import SaveContainer from './SaveContainer.jsx';
import ColorDisplay from '../components/ColorDisplay.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  totalColors: state.colors.totalColors,
  colorList: state.colors.colorList
});

const mapDispatchToProps = dispatch => ({
  deleteCard : (color) => dispatch(actions.deleteCardActionCreator(color)),
  addColorCard : (newColor) => dispatch(actions.addColorCardActionCreator(newColor)),
  addColor : (newColor) => dispatch(actions.addColorActionCreator(newColor))
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="coloredBox">
          <header id="header"> YOUR COLORWAY </header>
          <CreateContainer />
          <SaveContainer/>
          <ColorDisplay colorList={this.props.colorList}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);